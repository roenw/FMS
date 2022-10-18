var bg;

function preload() {
    bg = loadImage('assets/forest.jpg')
}

function setup() {
  createCanvas(1200, 900);
}

function draw() {
  tint(150, 255);
  background(bg);
  textSize(32);
  fill(255);
  text('Select a game to play!', 450, 40);
}