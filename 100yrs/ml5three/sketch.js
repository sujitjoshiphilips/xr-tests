

// let handPose;
// let video;
// let hands = [];

// function preload() {
//   // Load the handPose model
//   handPose = ml5.handPose();
// }

// function setup() {
//   var canvas = document.getElementById('canvas-1');
//   createCanvas(640, 480, WEBGL, canvas);
//   // Create the webcam video and hide it
//   video = createCapture(VIDEO);
//   video.size(640, 480);
//   video.parent('canvas-1'); // Assuming you have a div with id 'videoContainer'
//   video.hide();
//   // start detecting hands from the webcam video
//   handPose.detectStart(video, gotHands);
// }

// function draw() {
//   // Draw the webcam video
//   image(video, 0, 0, width, height);

//   // Draw all the tracked hand points
//   for (let i = 0; i < hands.length; i++) {
//     let hand = hands[i];
//     for (let j = 0; j < hand.keypoints.length; j++) {
//       let keypoint = hand.keypoints[j];
//       fill(0, 255, 0);
//       noStroke();
//       circle(keypoint.x, keypoint.y, 10);
//     }
//   }
// }

// // Callback function for when handPose outputs data
// function gotHands(results) {
//   // save the output to the hands variable
//   hands = results;
// }

//ThreeJS EXAMPLE:
import * as THREE from 'three';
var canvas = document.getElementById('canvas-1');
var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(75, 1.3, 0.1, 1000);

// var renderer = new THREE.WebGLRenderer({alpha:true});
// renderer.domElement = canvas
// document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1.2, 1.4, 1);
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cam.position.z = 5;

var render = function() {
  requestAnimationFrame(render);

  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;

  canvas.render(scene, cam);
};

render();