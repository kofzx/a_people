import * as THREE from 'three';

export class Ground {
    constructor(scene) {
        this.scene = scene;
        this.init();
    }

    init() {
        const size = 5000
        const planeGeometry = new THREE.PlaneGeometry(size, size);
        const planeMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            map: new THREE.TextureLoader().load('../../src/assets/grass.jpg')
        });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        this.scene.add(plane);
        plane.rotation.x = -0.5 * Math.PI;
    }
}