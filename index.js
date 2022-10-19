var bg;

function redirectUser(url) {
  window.location.href = url;
}

function mouseClicked() {
  // FIXME: Put real button X/Y boundaries
  // Determine where on the screen the mouse is clicked
  if(mouseX > 600 && mouseY < 450) {
    // Mouse clicked in Cartesian Q2, load Mole game
    redirectUser("whack")
  } else if(mouseX < 600 && mouseY < 450) {
    // Mouse clicked in Cartesian Q1, load Monkey game
    redirectUser("paintmonkey")
    alert("Monkey");
  } else if(mouseX < 600 && mouseY > 450) {
    // Mouse clicked in Cartesian Q3, load blocks game
    redirectUser("sorting")
  } else if(mouseX > 600 && mouseY > 450) {
    // Mouse clicked in Cartesian Q4, load catch fruit game
    redirectUser("fruitgame")
  }
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