import * as THREE from 'three';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, 4/3, 0.1, 1000 );
const container = document.getElementById('renderContainer');
document.body.appendChild(container);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha:true, powerPreference: 'high-performance' });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(640, 480);

container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 2, 1, 1 );
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: false});

const cube = new THREE.Mesh( geometry, material);
cube.position.x = keypointX;
cube.position.y = keypointY;
scene.add( cube );

camera.position.z = 5;

function animate() {

  cube.rotation.x += 0.03;
  cube.rotation.y += 0.08;

  renderer.render( scene, camera );
}