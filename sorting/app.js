/**
 * "Sorting Shapes"
 * Savannah Gong
 */

// <<Universal Top Bar>>
var score = 0; // starting score

// <<Draggable Object>>
let shape1;
let shape2;
let shape3;
let shape4;
let shape5;
let shape6;

//let shapes = [];

function preload() {
  // <<Universal Top Bar>>
  backArrow = loadImage('../assets/backarrow.png');
  barFont = loadFont('../assets/titlefont.otf');
  // <<Background>>
  junglebg = loadImage('../assets/junglebg.jpg');
  // <<Sound>>
  bgSound = loadSound('../assets/sounds/moveforward.mp3');

}

function setup() {
  createCanvas(window.screen.width - 100, window.screen.height - 150);
  bgSound.loop();

  // <<Draggable Object>>
  strokeWeight(4);
  stroke(51);
  shape1 = new Draggable(width * 0.25 - 50, height * 0.1, 100, 100, 0, 'blue');
//  shapes.push(shape1);
  shape2 = new Draggable(width * 0.5 - 50, height * 0.1, 100, 100, 0, 'green');
 // shapes.push(shape2);
  shape3 = new Draggable(width * 0.75 - 50, height * 0.1, 100, 100, 1, 'green');
 // shapes.push(shape3);
  shape4 = new Draggable(width * 0.25 - 50, height * 0.25, 100, 100, 1, 'red');
 // shapes.push(shape4);
  shape5 = new Draggable(width * 0.5 - 50, height * 0.25, 100, 100, 2, 'red');
 // shapes.push(shape5);
  shape6 = new Draggable(width * 0.75 - 50, height * 0.25, 100, 100, 2, 'blue');
 // shapes.push(shape6);
}

function draw() {
  background(junglebg);
  // <<Universal Top Bar>>
  getTopBar();

  // <<Left Box>>
  rect(width * 0.25 - 125, height * 0.55, 250, 250);
  // <<Middle Box>>
  fill('red');
  rect(width * 0.5 - 125, height * 0.55, 250, 250);
  // <<Right Box>>
  fill('green');
  rect(width * 0.75 - 125, height * 0.55, 250, 250);

  // <<Draggable Object>>
  // for (i = 0; i < shapes.length; i++){
  //   shapes[i].over;
  //   shapes[i].update;
  //   shapes[i].show;
  //   shapes[i].iontersects;
  // }
  
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

