(function(global) {
  class bact extends ImageNode {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });

      this.altair = document.createElement('img');
      Loader.load('res/altair.png', this.altair, () => null);
      this.cocoon = document.createElement('img');
      Loader.load('res/cocoon.png', this.cocoon, () => null);
      this.desire = document.createElement('img');
      Loader.load('res/desire.png', this.desire, () => null);
      this.ephidrena = document.createElement('img');
      Loader.load('res/ephidrena.png', this.ephidrena, () => null);
      this.holon = document.createElement('img');
      Loader.load('res/holon.png', this.holon, () => null);
      this.pandacube = document.createElement('img');
      Loader.load('res/pandacube.png', this.pandacube, () => null);
      this.still = document.createElement('img');
      Loader.load('res/still.png', this.still, () => null);
      this.logicoma = document.createElement('img');
      Loader.load('res/logicoma.png', this.logicoma, () => null);

      this.beats = [ 7814, 8230, 8742, 9136];
    }
    
    getImageName() {
      return 'res/bact.png';
    }

    render() {
      super.render();
      const startbean = 4416;

      const altairX = 149;
      const altairY = 295;
      const cocoonX = 522;
      const cocoonY = 561;
      const desireX = 835;
      const desireY = 650;
      const ephidrenaX = 223;
      const ephidrenaY = 542;
      const holonX = 1332;
      const holonY = 252;
      const pandacubeX = 1090;
      const pandacubeY = 401;
      const stillX = 1125;
      const stillY = 657;
      const logicomaX = 1219;
      const logicomaY = 535;

      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      if (BEAN > startbean && BEAN < startbean + 48) {
        this.ctx.drawImage(this.altair, altairX, altairY);
      }
      if (BEAN > startbean + 48 && BEAN < startbean + 48 *2) {
        this.ctx.drawImage(this.still, stillX, stillY);
      }
      if (BEAN > startbean + 48 * 2 && BEAN < startbean + 48 * 3) {
        this.ctx.drawImage(this.holon, holonX, holonY);
      }
      if (BEAN > startbean + 48 * 3 && BEAN < startbean + 48 * 4) {
        this.ctx.drawImage(this.cocoon, cocoonX, cocoonY);
      }
      if (BEAN > startbean + 48 * 4 && BEAN < startbean + 48 * 5) {
        this.ctx.drawImage(this.logicoma, logicomaX, logicomaY);
      }
      if (BEAN > startbean + 48 * 5 && BEAN < startbean + 48 * 6) {
        this.ctx.drawImage(this.desire, desireX, desireY);
      }
      if (BEAN > startbean + 48 * 6 && BEAN < startbean + 48 * 7) {
        this.ctx.drawImage(this.pandacube, pandacubeX, pandacubeY);
      }
      if (BEAN > startbean + 48 * 7 && BEAN < startbean + 48 * 8) {
        this.ctx.drawImage(this.ephidrena, ephidrenaX, ephidrenaY);
      }

      this.ctx.restore();
    }

  }

  global.bact = bact;
})(this);
