(function(global) {
  class gfx extends ImageNode {
    getImageName() {
      return 'res/gfx.png';
    }
  }

  global.gfx = gfx;
})(this);
