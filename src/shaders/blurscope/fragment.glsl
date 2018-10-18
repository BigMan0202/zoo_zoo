uniform float frame;
uniform sampler2D blurred;
uniform sampler2D original;
uniform float x;
uniform float y;
uniform float rotation;
uniform float method;

varying vec2 vUv;

# define PI 3.14159265


vec2 circle(vec2 uv) {
  float len = sqrt(uv.x * uv.x + uv.y * uv.y);
  vec2 uv2 = uv -= 0.5 * vec2(.1, -0.03);
  float len2 = sqrt(uv2.x * uv2.x + uv2.y * uv2.y);
  return vec2(len, len2);
}

vec2 wobble(vec2 uv) {
  float angle = atan(uv.y / uv.x) + rotation; 
  float len = 0.1 * sin(angle * PI * 2.) + sqrt(uv.x * uv.x + uv.y * uv.y);
  vec2 uv2 = uv -= 0.5 * vec2(.1, -0.03);
  float len2 = 0.1 * sin(angle * PI * 2.) + sqrt(uv2.x * uv2.x + uv2.y * uv2.y);
  return vec2(len, len2);
}

vec2 gear(vec2 uv) {
  float bpmWave = frame / 60. / 60. * 156. * PI * 2.;
  float angle = atan(uv.y / uv.x) + rotation; 
  float len = sin(bpmWave / 4.) * 0.1 * sign(sin(angle * PI * 2.)) + sqrt(uv.x * uv.x + uv.y * uv.y);
  vec2 uv2 = uv -= 0.5 * vec2(.1, -0.03);
  float len2 = sin(bpmWave / 4.) * 0.1 * sign(sin(angle * PI * 2.)) + sqrt(uv2.x * uv2.x + uv2.y * uv2.y);
  return vec2(len, len2);
}

vec2 square(vec2 uv) {
  float len = abs(uv.x) + abs(uv.y);
  vec2 uv2 = uv -= 0.5 * vec2(.1, -0.03);
  float len2 = abs(uv2.x) + abs(uv2.y);
  return vec2(len, len2);
}


void main() {
  vec3 blurred = texture2D(blurred, vUv).rgb;
  vec3 original = texture2D(original, vUv).rgb;

  vec3 brown = vec3(82., 46., 34.) / 255.;

  float size = mix(4.5, 1.5, pow(clamp((frame - 1014.) / (1107. - 1014.), 0., 1.), 3.));
  size = mix(size, 4.5, pow(clamp((frame - 7707.) / (7753. - 7707.), 0., 1.), 3.));
  //size = mix(size, 4.5, pow(clamp((frame - 9230.) / (7753. - 9230.), 0., 1.), 3.));
  //size = mix(size, 1.5, pow(clamp((frame - 9230.) / (9599. - 9230.), 0., 1.), 3.));
  float ringWidth = 0.075;
  float whitefrost = 0.5;
  vec3 yellow = vec3(238., 221., 165.) / 255.;
  vec3 white = vec3(1.);
  vec3 black = vec3(0.);
  vec3 gray = vec3(193.) / 255.;
  vec3 frostcolor = gray;

  vec2 uv = vUv * vec2(16./9., 1.) - vec2(.5 / 9. * 16., .5) + vec2(-x, y) / 960.;

  uv *= 1.44 * 2.;

  vec2 len;
  if(method > 2.5) {
    len = circle(uv);
  } else if(method > 1.5) {
      len = wobble(uv);
  } else if(method > 0.5) {
      len = gear(uv);
  } else {
      len = square(uv);
  }

  vec3 color = mix(mix(pow(blurred, vec3(3.)) * (1. - whitefrost * frostcolor) + whitefrost * frostcolor, original * (1. - whitefrost) * frostcolor, 0.), original, step(len.x, size));

  color = mix(color * 0.75, color, 1. - step(len.y, size + ringWidth) + step(len.x, size));
  color = mix(mix(color, color + frostcolor, 0.75), color, 1. - step(len.x, size + ringWidth) + step(len.x, size));
  
  gl_FragColor = vec4(color, 1.);
}
