uniform float frame;
uniform float zoom;
uniform sampler2D tDiffuse;

varying vec2 vUv;

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    gl_FragColor = color;
    if (frame > 1700. && frame < 2500.) {
        if (color.r < .15 && color.g < .15 && color.b < .15) {
            float pos = mix(vUv.x, vUv.y, sin(frame / 60.)) * 10.;
            float value = floor(fract(pos) + 0.5);
            gl_FragColor = mix(vec4(0., 0., 0., 1.), vec4(184./255., 13./255., 19./255., 1.), value);
        }
    }
}
