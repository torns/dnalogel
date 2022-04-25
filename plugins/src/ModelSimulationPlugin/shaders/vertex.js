export default `#version 300 es
	in vec3 position;
	in vec3 normal;
	out vec3 vPosition;
	out vec3 vNormal;

	uniform mat4 modelViewMatrix;
	uniform mat4 projectionMatrix;
	uniform vec3 cameraPos;
	// uniform vec3 normalMatrix;
	uniform mat4 modelMatrix;

	void main() {

		vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
		vec4 worldPosition = modelMatrix * vec4(position.xyz,1.0);
		vPosition = worldPosition.xyz;
		// vec3 transformedNormal = normalMatrix * normal;
		vNormal = normalize(normal);

		gl_Position = projectionMatrix * mvPosition;
	}
`;