(function(global) {
  class coolcat extends ImageNode {
    getImageName() {
      return 'res/coolcat.png';
    }
  }

  global.coolcat = coolcat;
})(this);
