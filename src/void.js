(function(global) {
  class woid extends ImageNode {
    getImageName() {
      return 'res/void.png';
    }
  }

  global.woid = woid;
})(this);
