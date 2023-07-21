import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

const gLTFLoader = new GLTFLoader();
const fbxLoader = new FBXLoader();
export const loadGLTF = (url) => {
    return new Promise((resolve, reject) => {
        gLTFLoader.load(url, (object) => {
            resolve(object);
        }, () => {}, (error) => {
            reject(error);
        })
    })
}

export const loadFbx = (url) => {
    return new Promise((resolve, reject) => {
        fbxLoader.load(url, (object) => {
            resolve(object);
        }, () => {}, (error) => {
            reject(error);
        })
    })
}