import { loadFbx } from "../utils/index.js";
import * as THREE from 'three';

export class Actor {
    constructor(scene, clock) {
        this.scene = scene;
        this.clock = clock;
        this.mixer = null;
        this.init();
    }
    async init() {
        const model = await loadFbx('../../src/model/rp_nathan_animated_003_walking.fbx')
        // 获取模型和动画数据
        const animations = model.animations;

        // 创建AnimationMixer对象并绑定到模型上
        this.mixer = new THREE.AnimationMixer(model);

        // 创建一个AnimationAction对象并播放动画
        const action = this.mixer.clipAction(animations[0]);
        action.play();

        // 将模型添加到场景中
        this.scene.add(model);
    }

    walk() {
        if (this.mixer) {
            this.mixer.update(this.clock.getDelta());
        }
    }
}