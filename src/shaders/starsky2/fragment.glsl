uniform float frame;
uniform sampler2D background;

varying vec2 vUv;

#define PI 3.14159265

float starsky(vec2 uv) {
    uv *= 200.;
    return max(0., sin(uv.x) * sin(uv.y) * 10. - 9.) + sin(uv.y / 200. + 1.8) * 0.5;
}

float circle(vec2 p, float r) {
    return step(sqrt(p.x * p.x + p.y * p.y), r);

}

void main() {
  vec4 background = texture2D(background, vUv);

  vec3 color = background.rgb;

  vec2 coords = vUv - .5;
  float angle = -frame / 5000.;
  coords = (coords + 4. * vec2(1666. - 960., -527. + 540.) / vec2(1920., 1080.));
  coords *= 0.25;
  coords += vec2(0., 1.);
  coords = vec2(coords.x * cos(angle) - coords.y * sin(angle),
                coords.x * sin(angle) + coords.y * cos(angle));

  vec3 yellow = vec3(238., 221., 165.) / 255.;

  float stars = starsky(coords);

  stars = clamp(stars + circle((vUv - vec2(0.5)) * vec2(16. / 9., .5) + vec2(0.,
  1.0299 + 0.065 - mix(0., 0.065, pow(clamp((frame - 1031. + 20.) / 20., 0., 1.), 5.))
  ), 1.), 0., 1.);

  color = 
  mix(
      color,

      mix(color, yellow * stars, 1. - background.a),

      smoothstep(0., 1., (frame - 691.) / (737. - 691.)));
  
  gl_FragColor = vec4(color, 1.);
}
