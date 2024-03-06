//import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
//const monkeyUrl = new URL('assets/Perseverance.glb', import.meta.url);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
//renderer.setClearColor(ffff);
//const orbit = new OrbitControls(camera, renderer.domElement);
//camera.position.set(10, 10, 10);
//orbit.update();
//const grid = new THREE.GridHelper(30, 30);
//scene.add(grid);
//const assetLoader = new GLTFLoader();
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);
camera.position.set(0, 0.1, 1);
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

//# sourceMappingURL=partes.efe12a9a.js.map
