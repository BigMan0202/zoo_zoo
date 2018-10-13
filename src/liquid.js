(function(global) {
  const VIEW_WIDTH = 540 * 2;
  const VIEW_HEIGHT = 360 * 2;

  const GRAVITY_X = 0;
  const GRAVITY_Y = 12000 * -9.8; // external (gravitational) forces
  const REST_DENS = 1000; // rest density
  const GAS_CONST = 2000; // const for equation of state
  const H = 24; // kernel radius
  const HSQ = H * H; // radius^2 for optimization
  const MASS = 65; // assume all particles have the same mass
  const VISC = 250; // viscosity constant
  const ITERATIONS = 20;
  const DT = 1 / 60 / ITERATIONS;

  // smoothing kernels defined in Müller and their gradients
  const POLY6 = 315 / (65 * Math.PI * Math.pow(H, 9));
  const SPIKY_GRAD = -45 / (Math.PI * Math.pow(H, 6));
  const VISC_LAP = 45 / (Math.PI * Math.pow(H, 6));

  // simulation parameters
  const EPS = H; // boundary epsilon
  const BOUND_DAMPING = -0.5;

  // particle data structure
  // stores position, velocity, and force for integration
  // stores density (rho) and pressure values for SPH
  class Particle {
    constructor(x, y) {
      this.positionX = x;
      this.positionY = y;
      this.velocityX = 0;
      this.velocityY = 0;
      this.forceX = 0;
      this.forceY = 0;
      this.rho = 0;
      this.p = 0;
    }
  }

  // interaction
  const MAX_PARTICLES = 2500;

  class liquid extends NIN.Node {
    constructor(id) {
      super(id, {
        inputs: {
          rotation: new NIN.Input(),
          zoom: new NIN.Input(),
          x: new NIN.Input(),
          y: new NIN.Input(),
        },
        outputs: {
          render: new NIN.Output()
        }
      });

      const sprite = document.createElement('canvas');
      this.sprite = sprite;
      sprite.width = H * 4;
      sprite.height = H * 4;
      const spriteCtx = sprite.getContext('2d');
      spriteCtx.fillRect(0, 0, sprite.width, sprite.height);
      spriteCtx.beginPath();
      spriteCtx.ellipse(sprite.width / 2, sprite.height / 2, sprite.width / 2, sprite.height / 2, 0, 0, Math.PI * 2, false);

      const gradient = spriteCtx.createRadialGradient(sprite.width / 2, sprite.height / 2, 0, sprite.width / 2, sprite.height / 2, sprite.width / 2);
      gradient.addColorStop(0, 'white');
      gradient.addColorStop(1, 'black');
      spriteCtx.fillStyle = gradient;
      spriteCtx.fill();

      this.particles = [];

      for(let i = 0; i < 35; i++) {
        for(let j = 0; j < 10; j++) {
            const x = i * 16 + Math.random();
            const y = 100 + j * 16;
          this.particles.push(new Particle(x, y));
        }
      }
      this.canvas = document.createElement('canvas');

      this.ctx = this.canvas.getContext('2d');
      this.resize();
      this.outputs.render.setValue(this.output);
      this.output = new THREE.CanvasTexture(this.canvas);
      this.output.minFilter = THREE.LinearFilter;
      this.output.magFilter = THREE.LinearFilter;
      this.outputs.render.setValue(this.texture);
    }

    integrate() {
      for(const p of this.particles) {
        p.velocityX += DT * p.forceX / p.rho;
        p.velocityY += DT * p.forceY / p.rho;
        p.positionX += DT * p.velocityX;
        p.positionY += DT * p.velocityY;

        if(p.positionX - EPS < 0.0) {
          p.velocityX *= BOUND_DAMPING;
          p.positionX = EPS;
        }
        if(p.positionX + EPS > VIEW_WIDTH) {
          p.velocityX *= BOUND_DAMPING;
          p.positionX = VIEW_WIDTH - EPS;
        }
        if(p.positionY - EPS < 0.0) {
          p.velocityY *= BOUND_DAMPING;
          p.positionY = EPS;
        }
        if(p.positionY + EPS > VIEW_HEIGHT) {
          p.velocityY *= BOUND_DAMPING;
          p.positionY = VIEW_HEIGHT - EPS;
        }
      }
    }
    
    computeDensityPressure() {
      for(const pi of this.particles) {
        pi.rho = 0;
        for(const pj of this.particles) {
          const rijX = pj.positionX - pi.positionX;
          const rijY = pj.positionY - pi.positionY;
          const r2 = rijX ** 2 + rijY ** 2;

          if(r2 < HSQ) {
            // this computation is symmetric
            pi.rho += MASS * POLY6 * Math.pow(HSQ - r2, 3);
          }
        }
        pi.p = GAS_CONST * (pi.rho - REST_DENS);
      }
    }

    computeForces() {
      for(const pi of this.particles) {
        let pressureX = 0;
        let pressureY = 0;
        let viscosityX = 0;
        let viscosityY = 0;
        for(const pj of this.particles) {
          if(pi == pj) {
            continue;
          }

          const rijX = pj.positionX - pi.positionX;
          const rijY = pj.positionY - pi.positionY;
          const r = Math.sqrt(rijX ** 2 + rijY ** 2);

          if(r < H) {
            const rijLength = Math.sqrt(rijX ** 2 + rijY ** 2);
            const rijNormalizedX = rijX / rijLength;
            const rijNormalizedY = rijY / rijLength;
            pressureX += -rijNormalizedX * MASS * (pi.p + pj.p) / (2 * pj.rho) * SPIKY_GRAD * Math.pow(H - r, 2);
            pressureY += -rijNormalizedY * MASS * (pi.p + pj.p) / (2 * pj.rho) * SPIKY_GRAD * Math.pow(H - r, 2);
            viscosityX += VISC * MASS * (pj.velocityX - pi.velocityX) / pj.rho * VISC_LAP * (H - r);
            viscosityY += VISC * MASS * (pj.velocityY - pi.velocityY) / pj.rho * VISC_LAP * (H - r);
          }
        }
        const rotation = this.inputs.rotation.getValue() + Math.PI;
        const gravityX = Math.sin(rotation) * GRAVITY_Y * pi.rho;
        const gravityY = Math.cos(rotation) * GRAVITY_Y * pi.rho;
        pi.forceX = pressureX + viscosityX + gravityX;
        pi.forceY = pressureY + viscosityY + gravityY;
      }
    }

    update(frame) {
      /*
      super.update(frame);
      this.frame = frame;

      for(let i = 0; i < ITERATIONS / 4; i++) {
        this.computeDensityPressure();
        this.computeForces();
        this.integrate();
      }
      */
    }

    render() {
      return;
      this.ctx.globalAlpha = 0.1;
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.globalAlpha = 0.05;
      this.ctx.globalCompositeOperation = 'lighter';
      const size = H;
      this.ctx.save();
      this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
      this.ctx.scale(0.1, 0.1);
      const rotation = this.inputs.rotation.getValue();
      const zoom = this.inputs.zoom.getValue();
      const x = this.inputs.x.getValue();
      const y = this.inputs.y.getValue();
      this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);
      this.ctx.rotate(rotation);
      for(const p of this.particles) {
        this.ctx.drawImage(
          this.sprite,
          p.positionX + this.sprite.width / 2,
          p.positionY + this.sprite.height / 2);

      }
      this.ctx.restore();

      this.output.needsUpdate = true;
      this.outputs.render.setValue(this.output);
    }

    resize() {
      this.canvas.width = 16 * GU;
      this.canvas.height = 9 * GU;
    }
  }

  global.liquid = liquid;
})(this);
