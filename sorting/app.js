/**
 * "Sorting Shapes"
 * Savannah Gong
 */

// <<Universal Top Bar>>
var score = 0; // starting score
var time = 60; // start time
var isRunning = true; // game state

// <<Drag Object >>
let grabbed = false;
let shapeX;
let shapeY;
const radius = 50;
const diameter = radius*2;

function preload() {
  // <<Universal Top Bar>>
  backArrow = loadImage('../assets/backarrow.png');
  barFont = loadFont('../assets/titlefont.otf');
}

function setup() {
  createCanvas(window.screen.width - 100, window.screen.height - 150);

  shapeX = width/2;
  shapeY = height/2;
}

function draw() {
  background(135, 194, 258);
  // <<Universal Top Bar>>
  getTopBar();
  // Timer
  if (isRunning == true) {
      if (time > 0) {
          time -= 1/60;
      } else {
          time = 0;
          // game end event
      }
  }
  // << Drag Object >>
  ellipse(shapeX, shapeY, diameter);
}

function mouseClicked() {
  // <<Universal Top Bar>>
  // Back Button
  if(mouseX > (width * 0.95) && mouseY < 35) {
    window.history.back();
  }
}

// <<Universal Top Bar>>
function getTopBar() {
  push();
  noStroke();
  fill(150);
  rect(0, 0, width, 50, 0 , 0 , 20 ,20);

  textFont(barFont);
  stroke(1);
  strokeWeight(3);
  fill(255);
  textSize(30);
  text('Score: ', 10, 35);
  text(score, 110, 35);
  text('Time: ', width * 0.44, 35);
  text(round(time), width / 2, 35);

  image(backArrow, width * 0.95, 5, 60, 40);
  pop();
}

// <<Drag Object>>
function mousePressed(){
  let d = dist(mouseX, mouseY, shapeX, shapeY);
  if (d < radius) {
    shapeMove = true;
}
  else{
    shapeMove = false;
  }
}

function mouseReleased(){
  shapeMove = false;
}

function mouseDragged(){
  if(shapeMove){
    shapeX = mouseX;
    shapeY = mouseY;
  }
}