(function(global) {
  class ninjadev extends ImageNode {
    getImageName() {
      return 'res/ninjadev.png';
    }

    render(renderer) {
      super.render(renderer);
      this.ctx.scale(this.canvas.width / 16, this.canvas.height / 9);
      this.ctx.translate(8, 4.5);

      this.ctx.fillStyle = '#eedda5';
      this.ctx.font = 'bold 1.5pt Arial';
      this.ctx.textBaseline = 'middle';

      if(BEAN >= 5952) {
        this.ctx.textAlign = 'right';
        this.ctx.fillStyle = '#b80d13';
        this.ctx.fillText('NIN', -1, 0);
      }

      if(BEAN >= 5952 + 8) {
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#eedda5';
        this.ctx.fillText('JA', 0, 0);
      }

      if(BEAN >=  5952 + 8 + 8) {
        this.ctx.textAlign = 'left';
        this.ctx.fillStyle = '#c1c1c1';
        this.ctx.fillText('DEV', 1, 0);
      }
    }
  }

  global.ninjadev = ninjadev;
})(this);
