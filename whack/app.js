var bg;
var moleUp = false;
var moleX;
var moleY;
var isRunning;

function preload() {
    bg = loadImage('../assets/grass.jpg');
    moleCA = loadImage('../assets/mole-ca.png');
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
    createCanvas(1200, 900);

    background(bg);

    isRunning = true;
}
  
function draw() {
    if(isRunning === true) {
        if(moleUp === false) {
            delayMs = generateRandom(1000, 5000);
            sleep(delayMs);
            drawMole();
            moleUp = true;
            sleep(delayMs);
        }
    }
}