uniform float frame;
uniform float zoom;
uniform sampler2D tDiffuse;
uniform sampler2D liquid;
uniform float x;
uniform float y;
uniform float throb;

varying vec2 vUv;

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    vec4 liquidColor = texture2D(liquid, vUv);
    if (frame > 1700. && frame < 2500.) {
        if (color.r < .15 && color.g < .15 && color.b < .15) {
            float pos = mix(vUv.x, vUv.y, sin(frame / 60.)) * 10.;
            float value = floor(fract(pos) + 0.5);
            gl_FragColor = mix(vec4(0., 0., 0., 1.), vec4(184./255., 13./255., 19./255., 1.), value);
        }
    }

    vec3 red = vec3(184., 13., 19.) / 255.;
    vec3 pink = 0.5 + vec3(184., 13., 19.) / 255.;

    vec3 liq = mix(pink, red, step(0.9, liquidColor.r));

    color = mix(color, vec4(liq, 1.), step(0.75, liquidColor.r));

    float sizer = 4.;

    vec2 uv = vUv * vec2(16./9., 1.) - vec2(.5 / 9. * 16., .5) + vec2(-x, y) / 960.;
    uv *= 1.44 * 2.;
    float len = sqrt(uv.x * uv.x + uv.y * uv.y);
    float t = mod(frame / 60. / 60. * 156. / 4., 1.);
    len -= t / sizer;
    len -= 1.5 + throb;
    color *= pow(0.25, max(0., t + floor(len * sizer)));
    gl_FragColor = color;
}
