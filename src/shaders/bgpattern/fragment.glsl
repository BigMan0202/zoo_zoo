uniform float frame;
uniform float zoom;
uniform sampler2D tDiffuse;
uniform float x;
uniform float y;
uniform float throb;
uniform float zoomThrob;

varying vec2 vUv;

void main() {

    vec2 zoomUv = vUv - 0.5;

    zoomUv *= 1. - zoomThrob * 0.01;

    vec3 color = texture2D(tDiffuse, zoomUv + 0.5).rgb;

    float startTimer = smoothstep(0., 1., (frame - 91.) / 184.);
    float startTimer2 = clamp((frame - 345.) / (368. - 345.), 0., 1.);
    

    vec3 yellow = vec3(238., 221., 165.) / 255.;
    vec3 black = vec3(0.);

    vec3 startColor;
    if(color.r + color.g + color.b < 0.05 && .25 -vUv.x + vUv.y > 0.5) {
        startColor = yellow;
    } else {
        startColor = black;
    }

    color = mix(startColor, color, startTimer2 * startTimer2 * startTimer2 * startTimer2 * startTimer2 * startTimer2 * startTimer2);
    color = mix(vec3(0.), color, startTimer);

    if (frame > 1700. && frame < 2500.) {
        if (color.r < .15 && color.g < .15 && color.b < .15) {
            float pos = mix(vUv.x, vUv.y, sin(frame / 60.)) * 10.;
            float value = floor(fract(pos) + 0.5);
            color = mix(vec3(0., 0., 0.), vec3(184./255., 13./255., 19./255.), value);
        }
    }

    float sizer = 4.;

    /*
    if(frame > 1106.5) {
        vec2 uv = vUv * vec2(16./9., 1.) - vec2(.5 / 9. * 16., .5) + vec2(-x, y) / 960.;
        uv *= 1.44 * 2.;
        float len = sqrt(uv.x * uv.x + uv.y * uv.y);
        float t = mod(frame / 60. / 60. * 156. / 4., 1.);
        len -= t / sizer;
        len -= 1.5 + throb;
        color *= pow(0.25, max(0., t + floor(len * sizer)));
    }
    */
    gl_FragColor = vec4(color, 1.);
}
