(function(global) {
  class yo extends NIN.THREENode {
    constructor(id) {
      super(id, {
        inputs: {
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

      this.title = document.createElement('img');
      Loader.load('res/title.png', this.title, () => null);

      this.scenes = [{
        x: 1666,
        y: 527,
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
      },
        /*
        this.inputs.f,
        this.inputs.g,
        this.inputs.h,
        this.inputs.h1,
        this.inputs.h2,
        this.inputs.h3,
        this.inputs.h4,
        this.inputs.h5,
        this.inputs.h6,
        this.inputs.i,
        this.inputs.j,
        this.inputs.k,
        this.inputs.l,
        this.inputs.m,
        this.inputs.n,
        this.inputs.o,
        this.inputs.p,
        this.inputs.q,
        this.inputs.r,
        this.inputs.s,
        */
      ];


      const curvePoints = [];
      let accumulatedX = 0;
      let accumulatedY = 0;
      for(let i = 0; i < this.scenes.length; i++) {
        const geometry = new THREE.PlaneBufferGeometry(1920, 1080);
        const scene = this.scenes[i];
        const x = (scene.x - 960) || 0;
        const y = (scene.y - 540) || 0;
        accumulatedX -= x;
        accumulatedY -= y;
        const point = new THREE.Vector3(accumulatedX, accumulatedY, -i * 500);
        curvePoints[i] = point;


        const mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshBasicMaterial({map: scene.texture.getValue()}));
        mesh.position.x = x;
        mesh.position.y = y;
        mesh.rotation.y = Math.PI;
        const container = new THREE.Object3D();
        container.position.x = point.x;
        container.position.y = point.y;
        container.position.z = point.z;
        scene.mesh = mesh;
        container.add(mesh);
        scene.container = container;
        this.scene.add(container);

        const debugHotspot = new THREE.Mesh(
          new THREE.BoxGeometry(20, 20, 20),
          new THREE.MeshBasicMaterial({color: 0xff00ff}));
        container.add(debugHotspot);

        const debugCenter = new THREE.Mesh(
          new THREE.BoxGeometry(20, 20, 20),
          new THREE.MeshBasicMaterial({color: 0x0000ff}));
        debugCenter.position.x = x;
        debugCenter.position.y = y;
        container.add(debugCenter);
      }

      this.camera = new THREE.OrthographicCamera(
        -1920 / 2, 1920 / 2,
        1080 / 2, -1080 / 2,
        0.001, 1000000);

      this.cameraPath = new THREE.CatmullRomCurve3(curvePoints);

      this.throb = 0;

    }

    beforeUpdate(frame) {
      for (const scene of this.scenes) {
        scene.texture.enabled = true;
      }

      this.progress = Math.min(0, frame / 300);
      const currentScene = this.scenes[this.progress | 0];
      currentScene.texture.enabled = true;
      const nextScene = this.scenes[(this.progress + 1) | 0];
      nextScene.texture.enabled = true;

    }

    update(frame) {
      this.progress = frame / 60 / 60 * PROJECT.music.bpm / 4 / 4;
      this.currentScene = this.scenes[(this.progress) | 0];
      this.nextScene = this.scenes[(this.progress + 1) | 0];
      const t = Math.max((this.progress - 1) / (this.scenes.length - 1), 0);
      const point = this.cameraPath.getPoint(t);

      this.camera.position.x = point.x;
      this.camera.position.y = point.y;
      this.camera.position.z = point.z - 999.9;
      this.camera.lookAt(new THREE.Vector3(point.x, point.y, point.z + 1));

      const currentScale = Math.exp(Math.log(4) * (this.progress % 1));
      this.currentScene.container.scale.set(currentScale, currentScale, 1);
      const nextScale = Math.exp(Math.log(0.25) * (1 - (this.progress % 1)));
      this.nextScene.mesh.scale.set(nextScale, nextScale, 1);


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
    }
  }

  global.yo = yo;
})(this);
