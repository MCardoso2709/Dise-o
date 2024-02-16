/*Una vez que tengas el servidor configurado para proporcionar los datos reales, 
simplemente actualizarías la función actualizarJunturas() para hacer la solicitud 
AJAX al servidor en lugar de generar datos aleatorios.*/

// Simulación de datos de ángulos de movimiento del robot
function simularJunturas() {
    // Generar valores aleatorios para las junturas del ángulo
    const junturas = {
        a0: (Math.random() * 180).toFixed(3),  // Reducir a 3 decimales
        a1: (Math.random() * 180).toFixed(3),
        a2: (Math.random() * 180).toFixed(3),
        a3: (Math.random() * 180).toFixed(3),
        a4: (Math.random() * 180).toFixed(3),
        a5: (Math.random() * 180).toFixed(3)
    };

    return junturas;
}

// Función para actualizar dinámicamente las junturas del ángulo
function actualizarJunturas() {
    // Simular datos de junturas
    const data = simularJunturas();

    // Actualizar el contenido del contenedor 'contGemelo' con los nuevos valores
    document.getElementById('a0').innerText = data.a0;
    document.getElementById('a1').innerText = data.a1;
    document.getElementById('a2').innerText = data.a2;
    document.getElementById('a3').innerText = data.a3;
    document.getElementById('a4').innerText = data.a4;
    document.getElementById('a5').innerText = data.a5;
}

// Actualizar las junturas cada 5 segundos
setInterval(actualizarJunturas, 5000);
// Crear la escena
var scene = new THREE.Scene();

// Crear la cámara
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear el renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear un brazo robótico simple
var arm = new THREE.Object3D();

var baseGeometry = new THREE.BoxGeometry(1, 1, 1);
var baseMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var base = new THREE.Mesh(baseGeometry, baseMaterial);
arm.add(base);

var upperArmGeometry = new THREE.BoxGeometry(0.5, 2, 0.5);
var upperArmMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var upperArm = new THREE.Mesh(upperArmGeometry, upperArmMaterial);
upperArm.position.y = 2;
arm.add(upperArm);

var lowerArmGeometry = new THREE.BoxGeometry(0.5, 2, 0.5);
var lowerArmMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
var lowerArm = new THREE.Mesh(lowerArmGeometry, lowerArmMaterial);
lowerArm.position.y = 1;
arm.add(lowerArm);

scene.add(arm);

// Agregar controles para rotar el brazo
var controls = new THREE.OrbitControls(camera, renderer.domElement);

// Renderizar la escena
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
