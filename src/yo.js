(function(global) {

    const F = (frame, from, delta) => (frame - FRAME_FOR_BEAN(from)) / (FRAME_FOR_BEAN(from + delta) - FRAME_FOR_BEAN(from));


  function rotatePoint(point, angle, pivot) {
    s = Math.sin(angle);
    c = Math.cos(angle);

    // translate point back to origin:
    point.x -= pivot.x;
    point.y -= pivot.y;

    // rotate point
    const xnew = point.x * c - point.y * s;
    const ynew = point.x * s + point.y * c;

    // translate point back:
    point.x = xnew + pivot.x;
    point.y = ynew + pivot.y;
    return point;
  }


  class yo extends NIN.THREENode {
    constructor(id) {
      super(id, {
        inputs: {
          pre9: new NIN.Input(),
          pre8: new NIN.Input(),
          pre7: new NIN.Input(),
          pre6: new NIN.Input(),
          pre5: new NIN.Input(),
          pre4: new NIN.Input(),
          pre3: new NIN.Input(),
          pre2: new NIN.Input(),
          pre1: new NIN.Input(),
          a: new NIN.Input(),
          b: new NIN.Input(),
          c: new NIN.Input(),
          d: new NIN.Input(),
          e: new NIN.Input(),
          f: new NIN.Input(),
          g: new NIN.Input(),
          h: new NIN.Input(),
          h1: new NIN.Input(),
          h2: new NIN.Input(),
          h3: new NIN.Input(),
          h4: new NIN.Input(),
          h5: new NIN.Input(),
          h6: new NIN.Input(),
          i: new NIN.Input(),
          j: new NIN.Input(),
          k: new NIN.Input(),
          l: new NIN.Input(),
          m: new NIN.Input(),
          n: new NIN.Input(),
          o: new NIN.Input(),
          p: new NIN.Input(),
          q: new NIN.Input(),
          r: new NIN.Input(),
          s: new NIN.Input(),
          t: new NIN.Input(),
          u: new NIN.Input(),
          v: new NIN.Input(),
        },
        outputs: {
          render: new NIN.TextureOutput(),
          zoom: new NIN.Output(),
          x: new NIN.Output(),
          y: new NIN.Output(),
          rotation: new NIN.Output(),
        },
      });

      this.title = Loader.loadTexture('res/title.png');
      this.titleMesh = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(1920, 1080),
        new THREE.MeshBasicMaterial({
          map: this.title,
          transparent: true,
        }));
      this.titleMesh.rotation.y = Math.PI;
      this.scene.add(this.titleMesh);

      this.scenes = [{
          x: 960,
          y: 540,
          rotation: 0,
          texture: this.inputs.pre8,
        }, {
          x: 1616,
          y: 184,
          rotation: 4.36 / 360 * Math.PI * 2,
          texture: this.inputs.pre8,
        }, {
          x: 1624,
          y: 304,
          rotation: -133.56 / 360 * Math.PI * 2,
          texture: this.inputs.pre7,
        }, {
          x: 344,
          y: 342,
          rotation: -60 / 360 * Math.PI * 2,
          texture: this.inputs.pre6,
        }, {
          x: 328,
          y: 656,
          rotation: 60 / 360 * Math.PI * 2,
          texture: this.inputs.pre5,
        }, {
          x: 454,
          y: 494,
          rotation: 88.19 / 360 * Math.PI * 2,
          texture: this.inputs.pre4,
        }, {
          x: 960,
          y: 360,
          rotation: -76.20 / 360 * Math.PI * 2,
          texture: this.inputs.pre3,
        }, {
          x: 840,
          y: 424,
          rotation: 165.94 / 360 * Math.PI * 2,
          texture: this.inputs.pre2,
        }, {
          x: 960,
          y: 540,
          rotation: 0,
          texture: this.inputs.pre1,
        }, {
          x: 0,
          y: 0,
          rotation: 0,
          texture: this.inputs.a,
        }, {
          x: 1666,
          y: 527,
          rotation: 0,
          texture: this.inputs.b,
        }, {
          x: 1009,
          y: 680,
          rotation: 0,
          texture: this.inputs.c,
        }, {
          x: 829,
          y: 600,
          rotation: 0,
          texture: this.inputs.d,
        }, {
          x: 960,
          y: 664,
          rotation: 0,
          texture: this.inputs.e,
        }, {
          x: 1169,
          y: 406,
          rotation: -185.93 / 360 * Math.PI * 2,
          texture: this.inputs.f,
        }, {
          x: 563.14 - 5 * 0,
          y: 607.61 - 83 * 0,
          rotation: 26.85 / 360 * Math.PI * 2 + 0.00,
          texture: this.inputs.g,
        }, {
          x: 709 - 35 * 0,
          y: 391 + 205 * 0,
          rotation: -24.14 / 360 * Math.PI * 2,
          texture: this.inputs.h,
        }, {
          x: 960,
          y: 540,
          rotation: 0,
          texture: this.inputs.h1,
        }, {
          x: 960,
          y: 540,
          rotation: Math.PI / 2,
          texture: this.inputs.h2,
        }, {
          x: 1235 - 560 * 0,
          y: 437 + 173 * 0,
          rotation: 27.16 / 360 * Math.PI * 2,
          texture: this.inputs.h3,
        }, {
          x: 740.64 + 285 * 0,
          y: 649 - 345 * 0,
          rotation: -66.55 / 360 * Math.PI * 2,
          texture: this.inputs.h4,
        }, {
          x: 644 + 300 * 0,
          y: 496 + 360 * 0,
          rotation: 42.79 / 360 * Math.PI * 2,
          texture: this.inputs.h5,
        }, {
          x: 1208 - 496 * 0,
          y: 414 + 253 * 0,
          rotation: -27.45 / 360 * Math.PI * 2,
          texture: this.inputs.h6,
        }, {
          x: 960,
          y: 540,
          rotation: Math.PI,
          texture: this.inputs.i,
        }, {
          x: 960,
          y: 540,
          rotation: -3.48 / 360 * Math.PI * 2,
          texture: this.inputs.j,
        }, {
          x: 680 + 228 * 0,
          y: 330 + 556 * 0,
          rotation: -130.97 / 360 * Math.PI * 2,
          texture: this.inputs.k,
        }, {
          x: 957 + 214 * 0,
          y: 190 + 625 * 0,
          rotation: 0,
          texture: this.inputs.l,
        }, {
          x: 878 + 230 * 0,
          y: 400 + 205 * 0,
          rotation: -19 / 360 * Math.PI * 2,
          texture: this.inputs.m,
        }, {
          x: 960,
          y: 540,
          rotation: -90 / 360 * Math.PI * 2,
          texture: this.inputs.n,
        }, {
          x: 616 + 0 * 0,
          y: 599 - 11 * 0,
          rotation: -56.12 / 360 * Math.PI * 2,
          texture: this.inputs.o,
        }, {
          x: 1014,
          y: 505,
          rotation: 12.86 / 360 * Math.PI * 2,
          texture: this.inputs.p,
        }, {
          x: 799.32,
          y: 629,
          rotation: -102.12 / 360 * Math.PI * 2,
          texture: this.inputs.q,
        }, {
          x: 635,
          y: 471,
          rotation: -43.66 / 360 * Math.PI * 2,
          texture: this.inputs.r,
        }, {
          x: 0,
          y: 0,
          rotation: 0,
          texture: this.inputs.s,
        },
      ];


      const curvePoints = [];
      const rotationPoints = [];
      let accumulatedX = 0;
      let accumulatedY = 0;
      let accumulatedRotation = 0;
      let accumulatedPreviousRotation = 0;
      for(let i = 0; i < this.scenes.length; i++) {
        const geometry = new THREE.PlaneBufferGeometry(1920, 1080);
        const scene = this.scenes[i];
        const previousScene = this.scenes[Math.max(i - 1, 0)];
        accumulatedRotation += scene.rotation;
        accumulatedPreviousRotation += previousScene.rotation;
        let x = (scene.x - 960) || 0;
        let y = (scene.y - 540) || 0;
        let temp = rotatePoint({x, y}, -accumulatedPreviousRotation, {x: 0, y: 0});
        //temp = rotatePoint(temp, scene.rotation, {x, y});

        accumulatedX -= temp.x;
        accumulatedY -= temp.y;
        const point = new THREE.Vector3(accumulatedX, accumulatedY, -i * 500);
        curvePoints[i] = point;
        rotationPoints[i] = new THREE.Vector3(accumulatedRotation, accumulatedRotation, accumulatedRotation);

        const mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshBasicMaterial({map: scene.texture.getValue(), transparent: true}));
        const rotated = rotatePoint({x: x, y: y}, -accumulatedPreviousRotation, {x: 0, y: 0});
        mesh.position.x = rotated.x;
        mesh.position.y = rotated.y;
        mesh.rotation.y = Math.PI;
        mesh.rotation.z = accumulatedPreviousRotation;
        const container = new THREE.Object3D();
        container.position.x = point.x;
        container.position.y = point.y;
        container.position.z = point.z;
        scene.mesh = mesh;
        container.add(mesh);
        scene.container = container;
        this.scene.add(container);

        /*
        const debugHotspot = new THREE.Mesh(
          new THREE.BoxGeometry(20, 20, 20),
          new THREE.MeshBasicMaterial({color: 0xff00ff}));
        container.add(debugHotspot);

        const debugCenter = new THREE.Mesh(
          new THREE.BoxGeometry(20, 20, 20),
          new THREE.MeshBasicMaterial({color: 0x0000ff}));
        debugCenter.position.x = mesh.position.x;
        debugCenter.position.y = mesh.position.y;
        container.add(debugCenter);
        */
      }

      const cameraZoom = 1;
      this.camera = new THREE.OrthographicCamera(
        -1920 / 2 * cameraZoom, 1920 / 2 * cameraZoom,
        1080 / 2 * cameraZoom, -1080 / 2 * cameraZoom,
        1, 1001);

      this.cameraPath = new THREE.CatmullRomCurve3(curvePoints);
      this.rotationPath = new THREE.SplineCurve(rotationPoints);

      this.throb = 0;
    }

    beforeUpdate(frame) {
      CanvasTexturePool.withdrawTextures();
      for (const scene of this.scenes) {
        scene.texture.enabled = false;
        scene.container.visible = false;
      }

      this.progress = (Math.max(frame - 737, 368)) / 60 / 60 * PROJECT.music.bpm / 4 / 4;

      this.progress += 9;
      this.progress += easeIn(0, 0.25, F(frame, 384 - 48, 48 * 5));

      this.progress += easeIn(0, 0.5 + 1.75, F(frame, 576 - 48 * 3, 48 * 3));

      this.progress += easeIn(0, 2, F(frame, 4008 - 48, 48));
      if(BEAN >= 4032) {
        this.progress -= lerp(0, 1.5, Math.pow(F(frame, 4032, 48 * 4 * 2), 1.1));
      }
      
      this.progress = Math.min(32.999, this.progress);

      this.progress = smoothstep(this.progress, 10, F(frame, 4800 + 24, 192 + 24)); 

      if(BEAN >= 5136) {
        this.progress = 9 - (frame - 9876) / 60 / 60 * PROJECT.music.bpm / 4 / 2;
      }

      if(this.progress < 1) {
        this.progress = 1;
      }


      const currentScene = this.scenes[this.progress | 0];
      currentScene.texture.enabled = true;
      currentScene.container.visible = true;
      const nextScene = this.scenes[(this.progress + 1) | 0];
      nextScene.texture.enabled = true;
      nextScene.container.visible = true;

      const previousScene = this.scenes[Math.max(0, (this.progress | 0) - 1)];
      previousScene.container.visible = true;
    }

    update(frame) {
      if(!this.progress) {
        return;
      }

      for(let i = 0; i < this.scenes.length; i++) {
        const scene = this.scenes[i];
        if((this.progress | 0) <= i - 1) {
          scene.container.scale.set(1, 1, 1);
          scene.mesh.scale.set(0.25, 0.25, 1);
        } else {
          scene.container.scale.set(4, 4, 1);
          scene.mesh.scale.set(1, 1, 1);
        }
      }

      this.currentScene = this.scenes[(this.progress) | 0];
      this.nextScene = this.scenes[(this.progress + 1) | 0];
      const t = Math.max((this.progress - 1) / (this.scenes.length - 1), 0);
      const nextT = Math.max((this.progress - 0.5) / (this.scenes.length - 1), 0);
      const point = this.cameraPath.getPoint(t);
      const nextPoint = this.cameraPath.getPoint(nextT);
      const rotation = this.rotationPath.getPoint(t).x;

      this.camera.position.x = point.x;
      this.camera.position.y = point.y;
      this.camera.position.z = point.z - 999.99;
      this.camera.lookAt(new THREE.Vector3(this.camera.position.x, this.camera.position.y, this.camera.position.z + 1));
      this.camera.rotation.z = Math.PI + rotation;
      window.HACKY_ROTATION_SHARE_SERVICE_DELUXE = this.camera.rotation.z;

      this.titleMesh.position.x = this.camera.position.x;
      this.titleMesh.position.y = this.camera.position.y;
      this.titleMesh.position.z = this.camera.position.z + 1.001;
      this.titleMesh.rotation.z = Math.PI + this.camera.rotation.z;
      let titleStep = lerp(0, 1, F(frame, 360 - 48, 24 + 48));
      titleStep = smoothstep(titleStep, 0, F(frame, 5040 - 48, 48));
      const titleScaler = easeIn(1, 4, titleStep);
      this.titleMesh.position.x += easeIn(0, 800, titleStep);
      this.titleMesh.position.y += easeIn(0, -1000, titleStep);
      this.titleMesh.scale.set(titleScaler, titleScaler, 1);

      this.titleMesh.visible = BEAN < 384 || (BEAN >= (5040 - 48));
      if(BEAN >= 5136) {
        this.titleMesh.visible = false;
      }

      const currentScale = Math.exp(Math.log(4) * (this.progress % 1));
      this.currentScene.container.scale.set(currentScale, currentScale, 1);
      const nextScale = Math.exp(Math.log(0.25) * (1 - (this.progress % 1)));
      this.nextScene.mesh.scale.set(nextScale, nextScale, 1);

      this.outputs.x.setValue(nextPoint.x - point.x);
      this.outputs.y.setValue(nextPoint.y - point.y);
      this.outputs.rotation.setValue(this.camera.rotation.z);
    }

    render(renderer) {
      if(this.currentScene.texture.getValue()) {
        this.currentScene.mesh.material.map = this.currentScene.texture.getValue();
        this.currentScene.mesh.material.needsUpdate = true;
        this.currentScene.mesh.material.map.needsUpdate = true;
      }
      if(this.nextScene.texture.getValue()) {
        this.nextScene.mesh.material.map = this.nextScene.texture.getValue();
        this.nextScene.mesh.material.needsUpdate = true;
        this.nextScene.mesh.material.map.needsUpdate = true;
      }
      super.render(renderer);
    }

    resize() {
      super.resize();
      CanvasTexturePool.resize();
    }
  }

  global.yo = yo;
})(this);
