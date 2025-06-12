var canvas = document.getElementById('canvas-1');

function setup() {
<<<<<<< HEAD
  var c = createCanvas(400, 400);
}

function draw() {
  ellipse(200,200,40,40)
}

var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(400,400);
const container = document.getElementById('threejsDiv');
document.body.appendChild(container);
container.appendChild(renderer.domElement);
=======
 createCanvas(400, 400, WEBGL,canvas);
  fill('rgba(0,0,0,0)');
  ellipse(100, 100, 50, 50);
  ellipse(width / 2, height / 2, 80, 80);
}


//ThreeJS EXAMPLE:
// var scene = new THREE.Scene();
// var cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
>>>>>>> 7075bfe (c)

// var renderer = new THREE.WebGLRenderer({alpha:true});
// renderer.setSize(window.innerWidth, window.innerHeight);
// const container = document.getElementById('threejsDiv');
// document.body.appendChild(container);
// container.appendChild(renderer.domElement);

// var geometry = new THREE.BoxGeometry(1.2, 1.4, 1);
// var material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00
// });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// cam.position.z = 5;

// var render = function() {
//   requestAnimationFrame(render);

//   cube.rotation.x += 0.05;
//   cube.rotation.y += 0.05;

<<<<<<< HEAD
=======
//   renderer.render(scene, cam);
// };

>>>>>>> 7075bfe (c)
// render();