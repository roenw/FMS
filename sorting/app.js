/**
 * "Sorting Shapes"
 * Savannah Gong
 */

// <<Universal Top Bar>>
var score = 0; // starting score
var time = 60; // start time
var isRunning = true; // game state

function preload() {
  // <<Universal Top Bar>>
  backArrow = loadImage('../assets/backarrow.png');
  barFont = loadFont('../assets/titlefont.otf');
}

function setup() {
  createCanvas(window.screen.width - 100, window.screen.height - 150);

  background(135, 194, 258);
  
  let button;
  button = createButton('big balls');
  button.position(69, 69);
  button.mousePressed(changeBG);
}

function changeBG() {
  let val = random(255);
  background(val);
}

function draw() {
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
}

function mouseClicked() {
  // <<Universal Top Bar>>
  // Back Button
  if(mouseX > (width * 0.95) && mouseY < 35) {
      window.location.href = "/";
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
