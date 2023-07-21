import * as THREE from 'three';

export class Sky {
    constructor(scene) {
        this.scene = scene;
        this.init();
    }

    init() {
        const loader = new THREE.TextureLoader();
        const geometry = new THREE.SphereGeometry(5000, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            map: loader.load('../../src/assets/map_bg.jpg')
        })

        const sphere = new THREE.Mesh(geometry, material);

        sphere.position.copy({
            x: 0,
            y: 0,
            z: 0
        })

        this.scene.add(sphere);

        // // 创建虚拟场景
        // const imgs = [
        //     '../../src/assets/map_bg.jpg'
        // ]
        //
        // // face 容器所需的资源数组
        // const mats = [];
        //
        // const loader = new THREE.TextureLoader();
        //
        // for (let i = 0; i < imgs.length; i++) {
        //     mats.push(new THREE.MeshBasicMaterial({
        //         map: loader.load(imgs[i]),
        //         side: THREE.DoubleSide
        //     }))
        // }
        //
        // const skybox = new THREE.Mesh(new THREE.BoxGeometry(5000, 5000, 5000), mats[0]);
        //
        // this.scene.add(skybox);
    }
}