uniform float frame;
uniform float x;
uniform float y;
uniform sampler2D background;

varying vec2 vUv;

#define PI 3.14159265

vec3 sunburst(vec2 uv) {
  float angle = atan(uv.x / uv.y);
  vec3 brown = vec3(82., 46., 34.) / 255.;
  vec3 yellow = vec3(238., 221., 165.) / 255.;
  return vec3(mix(yellow, brown, step(0., sin(frame / 4. + angle * 16. * PI * 2.))));
}

void main() {
  vec2 uv = vUv;
  uv = vUv - 0.5;
  uv = uv + 4. * vec2(x, -y);
  if(x < -0.001) {
    uv *= 0.25;
  }
  uv.y += .75;




  vec4 bgColor = texture2D(background, vUv);
  vec3 color = bgColor.rgb;
  if(frame > 1106.5) {
    if(x < -0.001) {
        color = mix(color, sunburst(uv), 1. - bgColor.a);
    } else {
        color = mix(color, sunburst(uv), 1. - step(color.r + color.g + color.b, 0.2));
    }
  } else {
      gl_FragColor = vec4(color, bgColor.a);
      return;
  }
  gl_FragColor = vec4(color, 1.);
}
