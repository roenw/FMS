var bg;
var moleUp = false;
var moleX;
var moleY;

var showTime;
var clickTime;
var timeDelta;

var maxMoleX;
var maxMoleY;

// <<Universal Top Bar>>
var score = 0; // starting score
var time = 30; // start time
var isRunning; // game state

function preload() {
    bg = loadImage('../assets/grass.jpg');
    moleCA = loadImage('../assets/mole-ca.png');

    // <<Universal Top Bar>>
    backArrow = loadImage('../assets/backarrow.png');
    barFont = loadFont('../assets/titlefont.otf');
}


function generateRandom(min, max) {
    // normalize min and max values
    min = Math.ceil(min);
    max = Math.floor(max);
    // js representation of a very complicated mathematical function to generate a random number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawMole() {
    moleX = generateRandom(50, window.screen.width - 500);
    moleY = generateRandom(50, window.screen.height - 300);

    imgScale = 0.25;

    maxMoleX = moleX + (imgScale * 800);
    maxMoleY = moleY + (imgScale * 719);

    image(moleCA, moleX, moleY, imgScale * 800, imgScale * 719);

    showTime = Date.now();
}

function redrawBG() {
    background(bg);
}

function setup() {
    createCanvas(window.screen.width - 100, window.screen.height - 150);

    background(bg);

    isRunning = false;
    gameFinished = false;
}
  
function draw() {
    // <<Universal Top Bar>>
    getTopBar();

    if (time < 0) {
        isRunning = false;
        gameFinished = true;
    }

    // Timer
    if (time > 0 && isRunning === true) {
        time -= 1/60;
    } else if(isRunning === false && gameFinished === false) {
        fill(255);
        textSize(55);
        text('Click the grass to start game.', 500, 950);
    }

    if(isRunning === true) {
        if(moleUp === false && isRunning === true) {
            if(timeDelta) {
                if(timeDelta < 1500) {
                    // if user is fast at clicking moles, give them the moles faster (next level)
                    setTimeout(drawMole, generateRandom(500, 2000));
                    moleUp = true;
                }
            } else {
                setTimeout(drawMole, generateRandom(1000, 5000));
                moleUp = true;
            }
        }
    } else if(gameFinished === true) {
        redrawBG();
        getTopBar();

        stroke(0);
        strokeWeight(5);
        textSize(80);        
        fill(180, 6, 0);
        text('Game Over!', 585, 750);
        fill(0, 102, 153);
        text('Your Score was ' + score, 500, 850);
        textSize(55);
        text('Click the grass to play again.', 500, 950);
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
        window.history.back();
    }

    if(isRunning === false && gameFinished === true) {
        if(mouseY > 100) {
            window.location.reload();
        }
    } if(isRunning === false && gameFinished === false) {
        time = 30;
        isRunning = true;
        redrawBG();
    }

    if(mouseX => moleX && mouseX <= maxMoleX) {
        if(mouseY >= moleY && mouseY <= maxMoleY) {
            // Mole clicked. Increment score, remove mole, and start timeout for new one
            clickTime = Date.now();
            timeDelta = clickTime - showTime;

            redrawBG();
            ++score
            moleUp = false;
        }
    }
}