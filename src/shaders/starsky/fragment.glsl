uniform float frame;
uniform sampler2D background;

varying vec2 vUv;


float starsky(vec2 uv) {
    uv *= 200.;
    return max(0., sin(uv.x) * sin(uv.y) * 10. - 9.) + 0.2;
}

void main() {
  vec4 background = texture2D(background, vUv);

  vec3 color = background.rgb;

  vec2 centered = vUv - vec2(0.5, -1.5);
  float angle = -frame / 5000.;
  vec2 rotated = vec2(centered.x * cos(angle) - centered.y * sin(angle),
                      centered.x * sin(angle) + centered.y * cos(angle));
  float stars = starsky(rotated);

  color = 
  mix(
      color,
      mix(color, color * stars, step(color.b, 0.9)),
      smoothstep(0., 1., (frame - 691.) / (737. - 691.)));
  
  gl_FragColor = vec4(color, 1.);
}
