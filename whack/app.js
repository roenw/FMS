var bg;
var moleUp = false;
var moleX;
var moleY;

// <<Universal Top Bar>>
var score = 0; // starting score
var time = 60; // start time
var isRunning; // game state

function preload() {
    bg = loadImage('../assets/grass.jpg');
    moleCA = loadImage('../assets/mole-ca.png');

    // <<Universal Top Bar>>
    backArrow = loadImage('../assets/backarrow.png');
    barFont = loadFont('../assets/titlefont.otf');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function generateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawMole() {
    // change these to random numbers
    moleX = generateRandom(50, 1150);
    moleY = generateRandom(50, 850);

    imgScale = 0.25;
    image(moleCA, moleX, moleY, imgScale * 800, imgScale * 719);
}

function removeMole() {
    background(bg);
}

function setup() {
    createCanvas(window.screen.width - 100, window.screen.height - 150);

    background(bg);

    isRunning = true;
}
  
function draw() {
    // <<Universal Top Bar>>
    getTopBar();

    if(isRunning === true) {
        // Timer
        if (time > 0) {
            time -= 1/60;
        } else {
            time = 0;
            // game end event
        }


        if(moleUp === false) {
            delayMs = generateRandom(1000, 5000);
            sleep(delayMs);
            drawMole();
            moleUp = true;
            sleep(delayMs);
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
    text('Time: ', width * 0.44, 35);
    text(round(time), width / 2, 35);

    image(backArrow, width * 0.95, 5, 60, 40);
    pop();
}

function mouseClicked() {
    // <<Universal Top Bar>>
    // Back Button
    if(mouseX > (width * 0.95) && mouseY < 35) {
        window.location.href = "/";
    }
}