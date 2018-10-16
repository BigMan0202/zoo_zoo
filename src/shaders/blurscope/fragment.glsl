uniform float frame;
uniform sampler2D blurred;
uniform sampler2D original;
uniform float x;
uniform float y;

varying vec2 vUv;

void main() {
  vec3 blurred = texture2D(blurred, vUv).rgb;
  vec3 original = texture2D(original, vUv).rgb;

  vec3 brown = vec3(82., 46., 34.) / 255.;

  float size = mix(4.5, 1.5, pow(clamp((frame - 1014.) / (1107. - 1014.), 0., 1.), 3.));
  float ringWidth = 0.075;
  float whitefrost = 0.5;
  vec3 yellow = vec3(238., 221., 165.) / 255.;
  vec3 white = vec3(1.);
  vec3 black = vec3(0.);
  vec3 gray = vec3(193.) / 255.;
  vec3 frostcolor = gray;

  vec2 uv = vUv * vec2(16./9., 1.) - vec2(.5 / 9. * 16., .5) + vec2(-x, y) / 960.;

  uv *= 1.44 * 2.;
  float len = sqrt(uv.x * uv.x + uv.y * uv.y);
  vec2 uv2 = uv -= 0.5 * vec2(.1, -0.03);
  float len2 = sqrt(uv2.x * uv2.x + uv2.y * uv2.y);
  vec3 color = mix(mix(pow(blurred, vec3(3.)) * (1. - whitefrost * frostcolor) + whitefrost * frostcolor, original * (1. - whitefrost) * frostcolor, 0.), original, step(len, size));

  color = mix(color * 0.75, color, 1. - step(len2, size + ringWidth) + step(len, size));
  color = mix(mix(color, color + frostcolor, 0.75), color, 1. - step(len, size + ringWidth) + step(len, size));
  
  gl_FragColor = vec4(color, 1.);
}
