(function(global) {
  class dudes extends ImageNode {
    getImageName() {
      return 'res/dudes.png';
    }
  }

  global.dudes = dudes;
})(this);
