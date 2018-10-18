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
