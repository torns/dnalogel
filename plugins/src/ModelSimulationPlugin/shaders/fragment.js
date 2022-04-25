export default `#version 300 es
#define MAX_STEPS 50
precision highp float;
precision highp sampler3D;

uniform sampler3D heatMap;
uniform sampler3D geometryMap;
uniform sampler2D colorMap;

uniform vec3 bboxMin;
uniform vec3 bboxMax;
uniform float step;
uniform float minT;
uniform float maxT;
uniform float opacity;

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 linearToOutputTexel( vec4 value ) { return LinearTosRGB( value ); }


float getHeatByLegalPos(vec3 pos){
	float geometryFactor = texture(geometryMap,pos).r;
	float legalFactor = clamp(geometryFactor,0.0,1.0);
	return texture(heatMap,pos).r * legalFactor;
}

float sampleOc(vec3 pos){
	//平滑滤波步长
	//todo:可以作为define传入的外部常量还是直接传
	float step_x = step / (bboxMax.x - bboxMin.x) * 0.5;
	float step_y = step / (bboxMax.y - bboxMin.y) * 0.5;
	float step_z = step / (bboxMax.z - bboxMin.z) * 0.5;
	vec3 p1 = pos + vec3(step_x,step_y,step_z);
	vec3 p2 = pos + vec3(step_x,-step_y,step_z);
	vec3 p3 = pos + vec3(step_x,step_y,-step_z);
	vec3 p4 = pos + vec3(step_x,-step_y,-step_z);
	vec3 p5 = pos + vec3(-step_x,step_y,step_z);
	vec3 p6 = pos + vec3(-step_x,-step_y,step_z);
	vec3 p7 = pos + vec3(-step_x,step_y,-step_z);
	vec3 p8 = pos + vec3(-step_x,-step_y,-step_z);

	return (getHeatByLegalPos(p1) + getHeatByLegalPos(p2) + getHeatByLegalPos(p3) + getHeatByLegalPos(p4) + getHeatByLegalPos(p5) + getHeatByLegalPos(p6) + getHeatByLegalPos(p7) + getHeatByLegalPos(p8)) * 0.125;

}

//考虑到有效仿真值连通域在三维空间中是封闭流形，这里直接按照normal方向搜索，牺牲一定精度，以保证展示效果
float sampleByNormal(vec3 normal, vec3 pos){
	float searchStep = step ;
	vec3 currentPos = pos;
	for (int iter=0; iter < MAX_STEPS; iter++) {
		if(iter >= MAX_STEPS){
			return texture(heatMap,currentPos).r;
		}
		if(texture(geometryMap,currentPos).r < 0.5){
			currentPos += normal * searchStep;
		}else{
			return texture(heatMap,currentPos).r;
		}
	}
}

float sample1(vec3 normal, vec3 pos){
	return texture(heatMap,pos).r;
}

in vec2 vUv;
in vec3 vPosition;
in vec3 vNormal;
out highp vec4 pc_fragColor;


float normalizeHeat(float t){
	float _t = clamp(t,minT,maxT);
	return (_t - minT)/(maxT - minT);
}

vec3 posToTexCood(vec3 pos){
	float x = (pos.x - bboxMin.x) / (bboxMax.x - bboxMin.x);
	float y = (pos.y - bboxMin.y) / (bboxMax.y - bboxMin.y);
	float z = (pos.z - bboxMin.z) / (bboxMax.z - bboxMin.z);
	return vec3(x,y,z);
}


void main() {
	vec3 texCood = posToTexCood(vPosition);
	// float color = sampleByNormal(vNormal,texCood);
	float color = sample1(vNormal,texCood);
	float normalColor= normalizeHeat(color);
	vec4 colorMapColor = texture(colorMap,vec2(normalColor,0.2));
	pc_fragColor = vec4(colorMapColor.xyz,opacity);
	// pc_fragColor = linearToOutputTexel(vec4(colorMapColor.xyz,opacity));
	}
`;