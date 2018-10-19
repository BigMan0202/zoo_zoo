(function (global) {
    const F = (frame, from, delta) => (frame - FRAME_FOR_BEAN(from)) / (FRAME_FOR_BEAN(from + delta) - FRAME_FOR_BEAN(from));

  class blurscopeNode extends NIN.ShaderNode {
    constructor(id, options) {
      options.inputs = {
        blurred: new NIN.TextureInput(),
        original: new NIN.TextureInput(),
        x: new NIN.Input(),
        y: new NIN.Input(),
      };
      super(id, options);
    }

    update(frame) {
      this.uniforms.frame.value = frame;
      this.uniforms.blurred.value = this.inputs.blurred.getValue();
      this.uniforms.original.value = this.inputs.original.getValue();
      this.uniforms.x.value = this.inputs.x.getValue();
      this.uniforms.y.value = this.inputs.y.getValue();
      this.uniforms.rotation.value = frame / 60.;
      this.uniforms.method.value = 3;
      this.uniforms.radius.value = 1.5;

      if (BEAN >= 570 && BEAN < 1000) {
        this.uniforms.x.value += easeOut(300, 0, F(frame, 570, 768));
        this.uniforms.radius.value = easeOut(1.8, 1.5, F(frame, 570, 768));
      }

      if (BEAN >= 1044 && BEAN < 1344) {
        this.uniforms.radius.value = easeIn(
          1.5,
          easeIn(2.1, 1.5, F(frame, 1332, 12)),
          F(frame, 1044, 12));
      }

      if(BEAN >= 2976) {
        this.uniforms.method.value = 0;
      }
      if(BEAN >= 2976 + 24 - 4) {
        this.uniforms.method.value = 1;
      }
      if(BEAN >= 2976 + 24 + 12) {
        this.uniforms.method.value = 2;
      }
      if(BEAN >=3072) {
        this.uniforms.method.value = 3;
      }

      if(BEAN >= 3168 && BEAN < 3264) {
        this.uniforms.method.value = 4;
      }

      if(BEAN >= 3648) {
        this.uniforms.method.value = 5;
      }

      if (BEAN >= 1716) {
        this.uniforms.radius.value = easeIn(1.5, 1.9, F(frame, 1716, 12));
      }

      if (BEAN >= 2100) {
        this.uniforms.radius.value = easeIn(1.9, 1.2, F(frame, 2100, 12));
      }

      if (BEAN >= 2292) {
        this.uniforms.radius.value = easeIn(1.2, 1.8, F(frame, 2292, 12));
      }

      if (BEAN >= 3060) {
        this.uniforms.radius.value = easeIn(1.8, 1.5, F(frame, 3060, 12));
      }

      if (BEAN >= 3156) {
        this.uniforms.radius.value = easeIn(1.5, 1.65, F(frame, 3156, 12));
      }

      if (BEAN >= 3252) {
        this.uniforms.radius.value = easeIn(1.65, 1.35, F(frame, 3252, 12));
      }

      if (BEAN >= 3636) {
        this.uniforms.radius.value = easeIn(1.35, 3, F(frame, 3636, 12));
      }

      if (BEAN >= 3648) {
        this.uniforms.radius.value = easeOut(2.6, 1.2, F(frame, 3648, 12));
      }

      if (BEAN >= 3840) {
        this.uniforms.radius.value = smoothstep(1.2, 1.9, F(frame, 3840, 96));
      }

      if(BEAN >= 2640 -4  && BEAN < 2640) {
        this.uniforms.x.value -= easeIn(0, 400, F(frame, 2640 - 2, 2));
        this.uniforms.y.value -= easeIn(0, 300, F(frame, 2640 - 2, 2));
      }
      if(BEAN >= 2640 && BEAN < 2640 + 8) {
        this.uniforms.x.value -= 400;
        this.uniforms.y.value -= 300;
      }
      if(BEAN >= 2640 + 8 && BEAN < 2640 + 24 - 4) {
        this.uniforms.x.value += 400;
        this.uniforms.y.value -= 0;
      }
      if(BEAN >= 2640 + 24 - 4 && BEAN < 2640 + 48 - 4) {
        this.uniforms.x.value -= 300;
        this.uniforms.y.value += 400;
      }
      if(BEAN >= 2640 + 48 - 4 && BEAN < 2640 + 48) {
        this.uniforms.x.value -= easeIn(300, 0, F(frame, 2640 + 48 - 4, 4));
        this.uniforms.y.value += easeIn(400, 0, F(frame, 2640 + 48 - 4, 4));
      }
    }
  }

  global.blurscopeNode = blurscopeNode;
})(this);
