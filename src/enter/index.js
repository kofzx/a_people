import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Ground } from "../object/ground.js";
import * as dat from 'dat-gui'
import { Sky } from '../object/sky.js';
import {Actor} from "../object/actor.js";

export const initScene = () => {
    //  获取canvas元素
    const canvas = document.getElementById('webgl');

    // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(220, 78, 550);
    scene.add(camera);

    const axesHelper = new THREE.AxesHelper(1000);
    scene.add( axesHelper );

    // 添加相机控件
    const controls = new OrbitControls(camera, canvas);
    // 是否有惯性
    controls.enableDamping = true;
    // 是否可以缩放
    controls.enableZoom = true;
    // 最近和最远距离
    controls.minDistance = 100;
    controls.maxDistance = 2000;

    // 添加灯光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 100);
    // scene.add(dLightHelper);

    const clock = new THREE.Clock();

    // 添加对象
    new Sky(scene)
    new Ground(scene)
    const actor = new Actor(scene, clock)

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 设置像素比
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // 设置场景颜色
    renderer.setClearColor(new THREE.Color(0x000000), 1);

    // const gui = new dat.GUI();
    // const ambientLightFolder = gui.addFolder('ambientLight');
    // ambientLightFolder.addColor(ambientLight, 'color').name('color');

    function start() {
        controls.update();
        // 渲染场景
        renderer.render(scene, camera);

        actor.walk && actor.walk()

        requestAnimationFrame(start);
    }
    start()

    window.addEventListener('resize', () => {
        // 更新相机的宽高比
        camera.aspect = window.innerWidth / window.innerHeight;
        // 更新相机的投影矩阵
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // 设置像素比
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    })
}