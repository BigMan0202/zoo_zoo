(function(global) {
  class bgpatternNode extends NIN.ShaderNode {
    constructor(id, options) {
      options.inputs = {
        texture: new NIN.TextureInput(),
        liquid: new NIN.TextureInput(),
        zoom: new NIN.Input(),
        x: new NIN.Input(),
        y: new NIN.Input(),
      };
      super(id, options);
      this.throb = 0;
      this.zoomThrob = 0;
    }

    update(frame) {
      this.throb *= 0.95;
      if(BEAT && BEAN % 48 == 24) {
        this.throb = 1;
      }
      this.zoomThrob *= 0.95;
      if(BEAT) {
        if((BEAN >= 576 && BEAN < 4800) ||
            BEAN >= 5136 && BEAN < 5856) {
          if(BEAN % 48 == 24) {
              this.zoomThrob = 5;
          }
        }

        switch(BEAN) {
          case 192:
          case 288:
          case 372:
          case 384:
            this.zoomThrob = 1;
            break;
          case 2640:
          case 2640 + 8:
          case 2640 + 24 - 4:
          case 2640 + 48:
            this.zoomThrob = 15;
        }

        /*
        if(BEAN >= 576) {
          switch(BEAN % (96 * 2)) {
            case 0:
            case 24 - 4:
            case 24 + 6:
            case 24 + 8:
            case 48 - 4:
            case 48:
            case 48 + 8:
            case 48 + 24 - 4:
            case 48 + 24 + 8:
            case 96:
            case 96 + 24 - 4:
            case 96 + 24 + 8:
            case 48 * 3 - 4:
            case 48 * 3:
            case 48 * 3 + 8:
            case 48 * 3 + 24 - 4:
            case 48 * 3 + 24:
            case 48 * 3 + 24 + 8:
            case 48 * 3 + 24 + 12:
            case 48 * 3 + 24 + 12 + 8:
              this.zoomThrob = 2;

          }
        }
        */
      }
      this.uniforms.frame.value = frame;
      this.uniforms.tDiffuse.value = this.inputs.texture.getValue();
      this.uniforms.liquid.value = this.inputs.liquid.getValue();
      this.uniforms.zoom.value = this.inputs.zoom.getValue();
      this.uniforms.x.value = this.inputs.x.getValue();
      this.uniforms.y.value = this.inputs.y.getValue();
      this.uniforms.throb.value = this.throb;
      this.uniforms.zoomThrob.value = this.zoomThrob;
    }
  }

  global.bgpatternNode = bgpatternNode;
})(this);
