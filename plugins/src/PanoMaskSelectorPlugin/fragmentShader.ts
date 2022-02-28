export const fragmentShader = `
const float PI = 3.1415926535897932384626433832795;
uniform int enable;
uniform sampler2D map;
varying vec2 vUv;

uniform vec3 selectedColor;
uniform vec3 maskColor;
uniform float opacity;
uniform float thickness;


// 判断两个颜色是否相似
bool compare(vec3 c1, vec3 c2, float threshold) {
  // 色值误差 0.05
  float diff = threshold;

  float r = abs(c1.x - c2.x);
  float g = abs(c1.y - c2.y);
  float b = abs(c1.z - c2.z);

  return r < diff && g < diff && b < diff;
}

void main(void) {
  vec3 color = texture2D(map, vUv).xyz;
  float alpha = texture2D(map, vUv).a;

  gl_FragColor = vec4(color, opacity);

  // 开关
  if (enable != 1) {
    gl_FragColor = vec4(color, opacity);
    return;
  }

  // 默认值：未提供 选中色值
  if (selectedColor.x == 0.0 && selectedColor.y == 0.0 && selectedColor.z == 0.0) {
    gl_FragColor = vec4(color, opacity);
    return;
  }

  bool similar = compare(color, selectedColor, 0.025);

  // 不相似
  if (similar == false) {
    gl_FragColor = vec4(color, opacity);
    return;
  }

  // 对比半径幅度
  float offset1 = thickness;
  float offset2 = offset1 * sin(PI/4.0);

  vec3 top = texture2D(map, vec2(vUv.x, vUv.y + offset1)).xyz;
  vec3 right = texture2D(map, vec2(vUv.x + offset1, vUv.y)).xyz;
  vec3 bottom = texture2D(map, vec2(vUv.x, vUv.y - offset1)).xyz;
  vec3 left = texture2D(map, vec2(vUv.x - offset1, vUv.y)).xyz;
  
  vec3 topRight = texture2D(map, vec2(vUv.x + offset2, vUv.y + offset2)).xyz;
  vec3 rightBottom = texture2D(map, vec2(vUv.x + offset2, vUv.y - offset2)).xyz;
  vec3 bottomLeft = texture2D(map, vec2(vUv.x - offset2, vUv.y - offset2)).xyz;
  vec3 leftTop = texture2D(map, vec2(vUv.x - offset2, vUv.y + offset2)).xyz;

  float threshold = 0.0025;
  bool a1 = compare(color, top, threshold);
  bool b1 = compare(color, right, threshold);
  bool c1 = compare(color, bottom, threshold);
  bool d1 = compare(color, left, threshold);


  bool a2 = compare(color, topRight, threshold);
  bool b2 = compare(color, rightBottom, threshold);
  bool c2 = compare(color, bottomLeft, threshold);
  bool d2 = compare(color, leftTop, threshold);

  if (a1 == true && b1 == true && c1 == true && d1 == true && a2 == true && b2 == true && c2 == true && d2 == true) {
    gl_FragColor = vec4(color, opacity);
    return;
  }

  gl_FragColor =  vec4(maskColor.x, maskColor.y, maskColor.z, 1.0);
  // gl_FragColor =  vec4(154.0 / 255.0, 205.0 / 255.0, 50.0 / 255.0, 1.0) ;
  // gl_FragColor =  vec4(139.0 / 255.0, 0.0 / 255.0, 0.0 / 255.0, 1.0) ;
  // gl_FragColor =  vec4(255.0 / 255.0, 235.0 / 255.0, 59.0 / 255.0, 1.0) ;

}
`
