(function(global) {
  class CanvasTexturePool {
    constructor() {
      this.textures = [];
      this.used = 0;
    }

    _createTexture() {
      const canvas = document.createElement('canvas');
      const texture = new THREE.CanvasTexture(canvas);
      texture.canvas = canvas;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      return texture;
    }

    getTexture() {
      let texture = this.textures[this.used];
      if(!texture) {
        texture = this._createTexture();
        this.textures[this.used] = texture;
      }
      this.used++;
      return texture;
    }

    withdrawTextures() {
      this.used = 0;
    }

    resize() {
      for(let i = 0; i < this.textures.length; i++) {
        const canvas = this.textures[i].canvas;
        canvas.width = Math.min(16 * GU * 4, 1920);
        canvas.height = Math.min(9 * GU * 4, 1080);
      }
    }
  }

  global.CanvasTexturePool = new CanvasTexturePool();
})(this);
