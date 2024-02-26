// BOTON PARA REGRESAR AL DASH
document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'dash.html'; // Redirige al usuario a dash.html cuando se hace clic en el botón
});

// Declarar una variable global para el objeto del gráfico de acelerómetro
var acelerometroChart;

// Función para crear el gráfico de acelerómetro
function crearGraficoAcelerometro() {
    // Obtener el contexto del lienzo del gráfico de acelerómetro
    var ctxAcelerometro = document.getElementById('acelerometroChart').getContext('2d');

    // Configurar los datos y opciones del gráfico de acelerómetro
    var data = {
        labels: ['X', 'Y', 'Z'],
        datasets: [{
            label: 'Acelerómetro',
            data: [0, 0, 0], // Datos iniciales
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Color del área del gráfico
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)', // Color del borde del gráfico
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    };

    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    // Crear el gráfico de acelerómetro
    acelerometroChart = new Chart(ctxAcelerometro, {
        type: 'bar', // Tipo de gráfico
        data: data,
        options: options
    });

    // Simular actualización de datos cada 1 segundo
    setInterval(actualizarDatos, 1000);
}

// Función para actualizar los datos del gráfico de acelerómetro con valores aleatorios
function actualizarDatos() {
    var newData = [];
    for (var i = 0; i < 3; i++) {
        newData.push(Math.floor(Math.random() * 100)); // Generar valores aleatorios entre 0 y 100
    }
    acelerometroChart.data.datasets[0].data = newData;
    acelerometroChart.update();
}

// Llamar a la función para crear el gráfico de acelerómetro al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    crearGraficoAcelerometro();
});



// Simulación de datos de ángulos de movimiento del robot
function simularJunturas() {

    // Generar valores aleatorios para las junturas del ángulo
    const junturas = {
        a0: (Math.random() * 180).toFixed(2),  // Reducir a 3 decimales
        a1: (Math.random() * 180).toFixed(2),
        a2: (Math.random() * 180).toFixed(2),
        a3: (Math.random() * 180).toFixed(2),
        a4: (Math.random() * 180).toFixed(2),
        a5: (Math.random() * 180).toFixed(2)
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



// Obtener todos los botones del menú
var menuButtons = document.querySelectorAll('.menu_button');

// Iterar sobre cada botón y agregar un event listener para el evento 'mouseover'
menuButtons.forEach(function(button) {
    button.addEventListener('mouseover', function() {
        // Obtener la imagen dentro del botón actual
        var img = button.querySelector('img');
        // Cambiar el filtro de la imagen para aumentar el brillo
        img.style.filter = 'brightness(1.2)';
    });

    // Agregar un event listener para el evento 'mouseout' para restaurar el color original al dejar de pasar el cursor
    button.addEventListener('mouseout', function() {
        // Obtener la imagen dentro del botón actual
        var img = button.querySelector('img');
        // Restaurar el filtro de la imagen
        img.style.filter = 'brightness(1)';
    });
});

