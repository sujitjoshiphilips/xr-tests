let handPose;
let video;
let hands = [];
let keypointX;
let keypointY;

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
const container = document.getElementById('renderContainer');
  var mycanvas = createCanvas(640, 480);
  mycanvas.parent(container);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
      keypointX = keypoint.x;
      keypointY = keypoint.y;
    //   console.log("keypointX:", keypointX, "keypointY:", keypointY);
    }
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}