var bg;

function redirectUser(url) {
  window.location.href = url;
}

function preload() {
    bgImg = loadImage('assets/forest.jpg');
    monkeyImg = loadImage('assets/monkey.png');
    moleImg = loadImage('assets/mole.png');
    sortedImg = loadImage('assets/sorted.png');
    fruitImg = loadImage('assets/fruit.png');
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

  imgScale = 1;
  image(sortedImg, 150, 500, imgScale * 223, imgScale * 160);

  imgScale = 0.8;
  image(fruitImg, 650, 500, imgScale * 210, imgScale * 206);
}

function draw() {
}