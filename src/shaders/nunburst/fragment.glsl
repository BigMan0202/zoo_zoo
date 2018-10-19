uniform float frame;
uniform float x;
uniform float y;
uniform sampler2D background;

varying vec2 vUv;

#define PI 3.14159265

float sign2(float value) {
    return (step(value, 0.) - 0.5) * 2.;
}

vec3 sunburst(vec2 uv) {
  float angle = atan(uv.x / uv.y);
  vec3 brown = vec3(82., 46., 34.) / 255.;
  vec3 yellow = vec3(238., 221., 165.) / 255.;
  float value = sin(frame / 4. + angle * 16. * PI * 2.);
  float boosted = 0.5 + 0.5 * pow(abs(value), .25) * sign(value);
  return vec3(mix(yellow, brown, boosted));
}

void main() {
  vec2 uv = vUv;
  uv = vUv - 0.5;
  uv = uv + 4. * vec2(x, -y);
  if(x < -0.001) {
    uv *= 0.25;
  }
  uv.y += .75;

  vec3 brown = vec3(82., 46., 34.) / 255.;


  vec4 bgColor = texture2D(background, vUv);
  vec3 color = bgColor.rgb;
  float amount = pow(clamp(0., 1., (frame - 1084.) / (1106. - 1084.)), 3.);
  if(frame > 1106.5 && frame < 5000.) {
    vec3 sunburstColor = vec3(1., 0., 0.);
    if(x < -0.001) {
        sunburstColor = mix(color, sunburst(uv), 1. - bgColor.a);
    } else {
        sunburstColor = mix(color, sunburst(uv), 1. - step(color.r + color.g + color.b, 0.2));
    }
    color = mix(color, sunburstColor, amount);
  } else {
        if(x < -0.001) {
          gl_FragColor = vec4(color, bgColor.a);
        } else {
          gl_FragColor = vec4(vec3(mix(brown, color, bgColor.a)), 1.);
        }
      return;
  }
  gl_FragColor = vec4(color, 1.);
}
