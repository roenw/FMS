var bg;

function preload() {
    bgImg = loadImage('assets/forest.jpg');
    monkeyImg = loadImage('assets/monkey.png');
    moleImg = loadImage('assets/mole.png');
}

function setup() {
  createCanvas(1200, 900);
  tint(150, 255);
  background(bgImg);
  textSize(32);
  fill(255);
  text('Select a game to play!', 450, 40);
  noTint();

  var imgScale;

  imgScale = 0.33;
  image(monkeyImg, 150, 150, imgScale * 798, imgScale * 558);
  
  imgScale = 1.5;
  image(moleImg, 600, 90, imgScale * 209, imgScale * 201);
}

function draw() {
}