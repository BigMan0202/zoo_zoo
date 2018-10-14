uniform float frame;
uniform float zoom;
uniform sampler2D bg;
uniform sampler2D liquid;
uniform float x;
uniform float y;
uniform float throb;

varying vec2 vUv;

void main() {
    vec4 bgColor = texture2D(bg, vUv);
    gl_FragColor = bgColor;
    vec4 liquidColor = texture2D(liquid, vUv);
    vec3 red = vec3(184., 13., 19.) / 255.;
    vec3 pink = 0.5 + vec3(184., 13., 19.) / 255.;
    vec3 liq = mix(pink, red, step(0.9, liquidColor.r));
    vec3 color = mix(bgColor.rgb, liq, step(0.75, liquidColor.r));
    gl_FragColor = vec4(color, 1.);
}
