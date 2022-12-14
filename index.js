var bg;

function redirectUser(url) {
  window.location.href = url;
}

function mouseClicked() {
  // FIXME: Put real button X/Y boundaries
  // Determine where on the screen the mouse is clicked
  if(mouseX > (window.screen.width / 2) && mouseY < (window.screen.height / 2)) {
    // Mouse clicked in Cartesian Q2, load Mole game
    redirectUser("whack");
  } else if(mouseX < (window.screen.width / 2) && mouseY < (window.screen.height / 2)) {
    // Mouse clicked in Cartesian Q1, load Monkey game
    redirectUser("paintmonkey");
  } else if(mouseX < (window.screen.width / 2) && mouseY > (window.screen.height / 2)) {
    // Mouse clicked in Cartesian Q3, load blocks game
    redirectUser("sorting");
  } else if(mouseX > (window.screen.width / 2) && mouseY > (window.screen.height / 2)) {
    // Mouse clicked in Cartesian Q4, load catch fruit game
    redirectUser("fruitgame");
  }
}

function preload() {
    bgSound = loadSound('assets/sounds/background0.mp3');
    bgImg = loadImage('assets/forest2.jpg');
    monkeyImg = loadImage('assets/monkey.gif');
    moleImg = loadImage('assets/mole.png');
    sortedImg = loadImage('assets/sorted.png');
    fruitImg = loadImage('assets/fruit.png');
    titleFont = loadFont('assets/titlefont.otf');

}

function setup() {
  createCanvas(window.screen.width - 100, window.screen.height - 150);
  bgSound.loop();

  push();
  tint(150, 255);
  background(bgImg);
  textFont(titleFont);
  strokeWeight(5);
  stroke(50);
  textSize(50);
  fill(255);
  text('Select a game to play!', width / 4 + 50, 60);
  textSize(30);
  text('Paint Monkey', width * 0.20, height * 0.20);
  text('Whack a Mole', width * 0.60 + 30, height * 0.20);
  text('Sorting Shapes', width * 0.20, height * 0.60 + 50);
  text('Catch the Fruit', width * 0.60 + 25, height * 0.60 + 50);
  textSize(15);
  text('Kevin Zhang', width * 0.25, height * 0.50);
  text('Roen Wainscoat', width * 0.65 + 10, height * 0.60 - 40);
  text('Savannah Gong', width * 0.25, height * 0.90 + 50);
  text('Brendan Waldrop', width * 0.65 + 10, height * 0.90 + 50);
  noTint();
  pop();

  var imgScale;

  imgScale = 0.33;
  image(monkeyImg, width * 0.20, height * 0.20, imgScale * 798, imgScale * 558);
  
  imgScale = 1.5;
  image(moleImg, width * 0.60 - 20, height * 0.20 - 50, imgScale * 209, imgScale * 201);

  imgScale = 1;
  image(sortedImg, width * 0.20, height * 0.70, imgScale * 223, imgScale * 160);

  imgScale = 0.8;
  image(fruitImg, width * 0.60 + 50, height * 0.70, imgScale * 210, imgScale * 206);
}

function draw() {
}
