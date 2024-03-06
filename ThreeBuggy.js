import * as THREE from './three.js-master/three.js-master/build/three.module.js'
//import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 32);
const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material3 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const material4 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const material5 = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const material6 = new THREE.MeshBasicMaterial({ color: 0x00ffff });

const cylinder1 = new THREE.Mesh(cylinderGeometry, material1);
cylinder1.position.y = -0.5;
cylinder1.position.z = 3;
scene.add(cylinder1);
const cylinder2 = new THREE.Mesh(cylinderGeometry, material2);
cylinder2.position.y = 0.25;
cylinder2.position.x = -0.125;
cylinder2.rotation.z = Math.PI/2;
cylinder1.add(cylinder2);
const cylinderfake1 = new THREE.Mesh(cylinderGeometry, material2);
cylinderfake1.position.x = 0.2;
cylinderfake1.rotation.z = -Math.PI/2;
cylinder2.add(cylinderfake1);
const cylinder3 = new THREE.Mesh(cylinderGeometry, material3);
cylinder3.position.y = 0.25;
cylinder3.position.x = -0.125;
cylinder3.rotation.z = Math.PI/2;
cylinderfake1.add(cylinder3);
const cylinderfake2 = new THREE.Mesh(cylinderGeometry, material3);
cylinderfake2.position.y = 0.125;
cylinderfake2.position.x = 0.3;
cylinderfake2.rotation.z = -Math.PI/2;
cylinder3.add(cylinderfake2);
const cylinder4 = new THREE.Mesh(cylinderGeometry, material4);
cylinder4.position.y = 0.25;
cylinder4.position.x = -0.125;
cylinder4.rotation.z = Math.PI/2;
cylinderfake2.add(cylinder4);
const cylinder5 = new THREE.Mesh(cylinderGeometry, material5);
cylinder5.position.y = 0.25;
cylinder5.position.x = 0.05;
cylinder5.rotation.z = -Math.PI/2;
cylinder4.add(cylinder5);
const cylinder6 = new THREE.Mesh(cylinderGeometry, material6);
cylinder6.position.y = 0.25;
cylinder6.position.x = -0.125;
cylinder6.rotation.z = Math.PI/2;
cylinder5.add(cylinder6);

const cylinders = [cylinder1, cylinder2, cylinder3, cylinder4, cylinder5, cylinder6];

const plane1Geometry = new THREE.PlaneGeometry(10, 10);
const plane1Material = new THREE.MeshBasicMaterial({ color: 0xB2B2B2, side: THREE.DoubleSide });
const plane1 = new THREE.Mesh(plane1Geometry, plane1Material);
plane1.rotation.x = -Math.PI / 2;
plane1.position.y = -1;
scene.add(plane1);

const plane2Geometry = new THREE.PlaneGeometry(10, 10);
const plane2Material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, side: THREE.DoubleSide });
const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
plane2.rotation.y = -Math.PI / 2;
plane2.position.y = -1;
plane2.position.x = -5
scene.add(plane2);

const plane3Geometry = new THREE.PlaneGeometry(10, 10);
const plane3Material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, side: THREE.DoubleSide });
const plane3 = new THREE.Mesh(plane3Geometry, plane3Material);
plane3.rotation.y = Math.PI / 2;
plane3.position.y = -1;
plane3.position.x = 5
scene.add(plane3);

const plane4Geometry = new THREE.PlaneGeometry(10, 10);
const plane4Material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, side: THREE.DoubleSide });
const plane4 = new THREE.Mesh(plane4Geometry, plane4Material);
plane4.rotation.x = Math.PI;
plane4.position.y = -1;
plane4.position.z = -5
scene.add(plane4);

const plane5Geometry = new THREE.PlaneGeometry(10, 10);
const plane5Material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, side: THREE.DoubleSide });
const plane5 = new THREE.Mesh(plane5Geometry, plane5Material);
plane5.rotation.x = Math.PI / 2;
plane5.position.y = 4;
scene.add(plane5);

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);

    cylinders[0].rotation.y = parseFloat(document.getElementById("slider1").value/57);

    for (let i = 1; i < cylinders.length; i++) {
        cylinders[i].rotation.x = parseFloat(document.getElementById("slider" + (i + 1)).value/57);
    }

    renderer.render(scene, camera);
};

animate();