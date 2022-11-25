/**
 * "Sorting Objects"
 * Savannah Gong
 */

// <<Universal Top Bar>>
var score = 0; // starting score
var mode = 0;

// <<Draggable Object>>
let shape1;
let shape2;
let shape3;
let shape4;
let shape5;
let shape6;

function preload() {
  // <<Universal Top Bar>>
  backArrow = loadImage('../assets/backarrow.png');
  barFont = loadFont('../assets/titlefont.otf');
  // <<Background>>
  junglebg = loadImage('../assets/junglebg.jpg');
  // <<Sound>>
  bgSound = loadSound('../assets/sounds/moveforward.mp3');
  correct = loadSound('../assets/sounds/correct.wav');
  wrong = loadSound('../assets/sounds/wrong.wav');
  nextLevel = loadSound('../assets/sounds/nextlevel.wav');
}

function setup() {
  createCanvas(window.screen.width - 100, window.screen.height - 150);
  bgSound.loop();

  // <<Draggable Object>>
  strokeWeight(4);
  stroke(51);
  shape1 = new Draggable(width * 0.25 - 50, height * 0.1, 100, 100, 0, 'red');
  shape2 = new Draggable(width * 0.5 - 50, height * 0.1, 100, 100, 0, 'green');
  shape3 = new Draggable(width * 0.75 - 50, height * 0.1, 100, 100, 1, 'green');
  shape4 = new Draggable(width * 0.25 - 50, height * 0.25, 100, 100, 1, 'blue');
  shape5 = new Draggable(width * 0.5 - 50, height * 0.25, 100, 100, 2, 'red');
  shape6 = new Draggable(width * 0.75 - 50, height * 0.25, 100, 100, 2, 'blue');
}

function draw() {
  background(junglebg);
  // <<Universal Top Bar>>
  getTopBar();

if (mode == 0){
  textFont(barFont);
  stroke(1);
  strokeWeight(3);
  fill(255);
  textSize(30);
  text('Sort the objects by color!', width * 0.5 - 200, height * 0.25 + 150);
  text(200, 35);
}

if (mode == 1){
  textFont(barFont);
  stroke(1);
  strokeWeight(3);
  fill(255);
  textSize(30);
  text('Sort the objects by shape!', width * 0.5 - 200, height * 0.25 + 150);
  text(200, 35);
}

if (mode == 2){
  textFont(barFont);
   stroke(2);
   strokeWeight(3);
   fill(255);
   textSize(50);
   text('Congrats! You made it to Level 2!', width * 0.5 - 400, height * 0.25 + 100);
   textSize(30);
   text('Click', width * 0.5 - 50, height * 0.25 + 135);
   text(200, 35);
    textSize(75);
    text('Start', width * 0.5 - 125, height * 0.25 + 200);
}

if (mode == 3){
  textFont(barFont);
   stroke(2);
   strokeWeight(3);
   fill(255);
   textSize(50);
   text('Congrats! You have correctly sorted the objects!', width * 0.5 - 625, height * 0.25 + 100);
   textSize(30);
   text('Click', width * 0.5 - 50, height * 0.25 + 135);
   text(200, 35);
   textSize(75);
    text('Play Again', width * 0.5 - 200, height * 0.25 + 200);
}

if (score == 6 && mode == 0){
  mode = 2;
}
if (score == 6 && mode == 1){
  mode = 3;
}
if (mode == 3){
  shape1.sound();
  shape2.sound();
  shape3.sound();
  shape4.sound();
  shape5.sound();
  shape6.sound();
}

  // <<Left Box>>
  fill('blue');
  rect(width * 0.25 - 125, height * 0.55, 250, 250);
  // <<Middle Box>>
  fill('red');
  rect(width * 0.5 - 125, height * 0.55, 250, 250);
  // <<Right Box>>
  fill('green');
  rect(width * 0.75 - 125, height * 0.55, 250, 250);

if (mode == 1){
  fill('black');
  rect(width * 0.25 - 50, height * 0.55 + 100, 100, 100);
  circle(width * 0.5, height * 0.55 + 150, 100);
  triangle(width * 0.75, height * 0.55 + 100, width * 0.75 - 50, height * 0.55 + 200, width * 0.75 + 50, height * 0.55 + 200);
}

  // <<Draggable Object>>
  
  shape1.over();
  shape1.update();
  shape1.show();
  shape1.intersects();
  shape2.over();
  shape2.update();
  shape2.show();
  shape2.intersects();
  shape3.over();
  shape3.update();
  shape3.show();
  shape3.intersects();
  shape4.over();
  shape4.update();
  shape4.show();
  shape4.intersects();
  shape5.over();
  shape5.update();
  shape5.show();
  shape5.intersects();
  shape6.over();
  shape6.update();
  shape6.show();
  shape6.intersects();

  score = shape1.score + shape2.score + shape3.score + shape4.score + shape5.score + shape6.score;

  if (score == 6){
  shape1.score = 0;
  shape2.score = 0;
  shape3.score = 0;
  shape4.score = 0;
  shape5.score = 0;
  shape6.score = 0;
  }
}

function mouseClicked() {
  // <<Universal Top Bar>>
  // Back Button
  if (mouseX > (width * 0.95) && mouseY < 35) {
    window.history.back();
  }

  if (mode == 2){
  let d = dist(mouseX, mouseY, width / 2, height * 0.45);
    if (d < 100) {
      mode = 1;
      nextLevel.play();
      shape1.origin();
      shape2.origin();
      shape3.origin();
      shape4.origin();
      shape5.origin();
      shape6.origin();
    }
  }

  if (mode == 3){
    let d = dist(mouseX, mouseY, width / 2, height * 0.45);
      if (d < 100) {
        mode = 0;
        nextLevel.play();
        shape1.origin();
        shape2.origin();
        shape3.origin();
        shape4.origin();
        shape5.origin();
        shape6.origin();
      }

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


  image(backArrow, width * 0.95, 5, 60, 40);
  pop();
}

function mousePressed() {
  // <<Draggable Object>>
  shape1.pressed();
  shape2.pressed();
  shape3.pressed();
  shape4.pressed();
  shape5.pressed();
  shape6.pressed();
}

function mouseReleased() {
    // <<Draggable Object>>
  shape1.released();
  shape2.released();
  shape3.released();
  shape4.released();
  shape5.released();
  shape6.released();
}