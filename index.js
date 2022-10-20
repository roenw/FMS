var bg;

function redirectUser(url) {
  window.location.href = url;
}

function mouseClicked() {
  // FIXME: Put real button X/Y boundaries
  // Determine where on the screen the mouse is clicked
  if(mouseX > (window.screen.width / 2) && mouseY < (window.screen.height / 2)) {
    // Mouse clicked in Cartesian Q2, load Mole game
    redirectUser("whack")
  } else if(mouseX < (window.screen.width / 2) && mouseY < (window.screen.height / 2)) {
    // Mouse clicked in Cartesian Q1, load Monkey game
    redirectUser("paintmonkey")
  } else if(mouseX < (window.screen.width / 2) && mouseY > (window.screen.height / 2)) {
    // Mouse clicked in Cartesian Q3, load blocks game
    redirectUser("sorting")
  } else if(mouseX > (window.screen.width / 2) && mouseY > (window.screen.height / 2)) {
    // Mouse clicked in Cartesian Q4, load catch fruit game
    redirectUser("fruitgame")
  }
}

function preload() {
    bgImg = loadImage('assets/forest2.jpg');
    monkeyImg = loadImage('assets/monkey.gif');
    moleImg = loadImage('assets/mole.png');
    sortedImg = loadImage('assets/sorted.png');
    fruitImg = loadImage('assets/fruit.png');
    titleFont = loadFont('assets/titlefont.otf');
}

function setup() {
  createCanvas(window.screen.width - 50, window.screen.height - 150);
  tint(150, 255);
  background(bgImg);
  textFont(titleFont);
  strokeWeight(5);
  stroke(50);
  textSize(50);
  fill(255);
  text('Select a game to play!', width / 4 + 50, 60);
  noTint();

  var imgScale;

  imgScale = 0.33;
  image(monkeyImg, width * 0.20, height * 0.20, imgScale * 798, imgScale * 558);
  
  imgScale = 1.5;
  image(moleImg, width * 0.60, height * 0.20 - 50, imgScale * 209, imgScale * 201);

  imgScale = 1;
  image(sortedImg, width * 0.20, height * 0.70, imgScale * 223, imgScale * 160);

  imgScale = 0.8;
  image(fruitImg, width * 0.60 + 50, height * 0.70, imgScale * 210, imgScale * 206);
}

function draw() {
}
