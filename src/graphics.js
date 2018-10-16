(function(global) {
  class graphics extends ImageNode {
    getImageName() {
      return 'res/graphics.png';
    }
  }

  global.graphics = graphics;
})(this);
