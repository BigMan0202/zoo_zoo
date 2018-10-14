uniform float frame;
uniform sampler2D overlay;
uniform sampler2D background;

varying vec2 vUv;

void main() {
  vec4 bg = texture2D(background, vUv);

  vec3 color = bg.rgb;

  float horizon = 0.44;
  if(vUv.y < horizon) {
    vec2 reflectionUv = vec2(vUv.x, 1. - vUv.y * 2. + 0.30) ;
    reflectionUv.x += 0.005 * sin(frame / 15. + vUv.x * 10.);
    reflectionUv.y += 0.007 * cos(frame / 17. + vUv.y * 12.);
    reflectionUv.y += 0.0011 * sin(frame / 19. + vUv.x * vUv.y  * 15.);
    reflectionUv.y += 0.002 * cos(frame / 41. * vUv.y) * sin(frame / 3. + vUv.x * vUv.y  * 15.);
    vec3 ground = texture2D(background, vec2(reflectionUv.x, .64 - reflectionUv.y * .5)).rgb;
    vec3 refl = mix(texture2D(background, reflectionUv).rgb, ground, 0.8);
    color = refl;
  }

  
  gl_FragColor = vec4(color, 1.);
}
