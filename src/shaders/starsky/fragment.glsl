uniform float frame;
uniform sampler2D background;

varying vec2 vUv;

#define PI 3.14159265


float starsky(vec2 uv) {
    uv *= 100.;
    return pow(max(0., sin(uv.x) * sin(uv.y) * 10. - 9.), 0.25);
}

void main() {
  vec4 background = texture2D(background, vUv);

  vec3 color = background.rgb;

  vec2 coords = vUv - vec2(0.5, -0.5);
  coords *= vec2(16. / 9., 1.);
  float angle = -frame / 5000.;
  coords = vec2(coords.x * cos(angle) - coords.y * sin(angle),
                coords.x * sin(angle) + coords.y * cos(angle));

  float stars = starsky(coords);

  vec3 yellow = vec3(238., 221., 165.) / 255.;
  vec3 brown = vec3(82., 46., 34.) / 255.;

  vec3 starColor = mix(brown, yellow, stars);

  color = mix(
      mix(color, starColor, 1. - background.a),
      mix(color, yellow, 1. - background.a),
      1. - smoothstep(0., 1., (frame - 691.) / (737. - 691.)));
  
  gl_FragColor = vec4(color, 1.);
}
