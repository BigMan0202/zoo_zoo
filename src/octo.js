(function(global) {
  class octo extends ImageNode {
    constructor(id) {
      super(id);

      this.eyePositions = [
        { // top left
          x: 858,
          y: 418,
          radiusX: 29,
          radiusY: 25,
          closeBean: 17,
          openBean: 21,
        },
        { // top right
          x: 953,
          y: 404,
          radiusX: 35,
          radiusY: 33,
          closeBean: 18,
          openBean: 22,
        },
        { // row 1, number 1
          x: 728,
          y: 610,
          radiusX: 25,
          radiusY: 25,
          closeBean: 7,
          openBean: 12,
        },
        { // row 1, number 2
          x: 819,
          y: 610,
          radiusX: 22,
          radiusY: 20,
          closeBean: 8,
          openBean: 14,
        },
        { // row 1, number 3
          x: 893,
          y: 606,
          radiusX: 25,
          radiusY: 25,
          closeBean: 7,
          openBean: 13,
        },
        { // row 1, number 4
          x: 965,
          y: 587,
          radiusX: 28,
          radiusY: 28,
          closeBean: 9,
          openBean: 13,
        },
        { // row 2, number 1
          x: 778,
          y: 649,
          radiusX: 25,
          radiusY: 25,
          closeBean: 0,
          openBean: 8,
        },
        { // row 2, number 2
          x: 860,
          y: 653,
          radiusX: 25,
          radiusY: 26,
          closeBean: 1,
          openBean: 7,
        },
        { // row 2, number 3
          x: 931,
          y: 653,
          radiusX: 25,
          radiusY: 25,
          closeBean: 0,
          openBean: 5,
        },
      ];
    }

    getImageName() {
      return 'res/octo.png';
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      const shiraz = '#b80d13';
      this.ctx.fillStyle = shiraz;

      for (const eyePosition of this.eyePositions) {
        const closeFrame = FRAME_FOR_BEAN(((BEAN / 48) | 0) * 48 + eyePosition.closeBean);
        const openFrame = FRAME_FOR_BEAN(((BEAN / 48) | 0) * 48 + eyePosition.openBean);
        const open = easeOut(
          1,
          easeIn(0, 1, (this.frame - openFrame) / 7),
          (this.frame - closeFrame) / 7
        );
        const bottomOpen = lerp(eyePosition.radiusY, 0, open * 2);
        const topOpen = lerp(1, 0, open * 2 - 1);

        this.ctx.beginPath();
        this.ctx.ellipse(eyePosition.x,
                         eyePosition.y - eyePosition.radiusY + eyePosition.radiusY * topOpen,
                         lerp(eyePosition.radiusX / 2, eyePosition.radiusX, topOpen),
                         eyePosition.radiusY * topOpen,
                         0, Math.PI, Math.PI * 2);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.ellipse(eyePosition.x,
                         eyePosition.y,
                         eyePosition.radiusX,
                         bottomOpen,
                         0, 0, Math.PI);
        this.ctx.fill();
      }
    }
  }

  global.octo = octo;
})(this);
