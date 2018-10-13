(function(global) {
  class roses extends ImageNode {
    getImageName() {
      return 'res/roses.png';
    }
  }

  global.roses = roses;
})(this);
