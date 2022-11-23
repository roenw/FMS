var bg;
var moleUp = false;
var moleX;
var moleY;

var showTime;
var clickTime;
var timeDelta;

var playedPunishmentSound = false;

var maxMoleX;
var maxMoleY;

var pointSound = new Audio('../assets/sounds/pop2.mp3');
var radarSound = new Audio('../assets/sounds/radar.mp3');
var startSound = new Audio('../assets/sounds/start1.wav');
var backgroundMusic = new Audio('../assets/sounds/trap.mp3');

// <<Universal Top Bar>>
var score = 0; // starting score
var time = 30; // start time
var isRunning; // game state

const helpMessage = 'Help';
const helpMessageX = 1500;
const helpMessageY = 35;

function preload() {
    bg = loadImage('../assets/grass.jpg');
    moleCA = loadImage('../assets/mole-ca.png');

    // <<Universal Top Bar>>
    backArrow = loadImage('../assets/backarrow.png');
    barFont = loadFont('../assets/titlefont.otf');
}

function isMouseInsideText(message, messageX, messageY) {
    const messageWidth = textWidth(message);
    const messageTop = messageY - textAscent();
    const messageBottom = messageY + textDescent();
  
    return mouseX > messageX && mouseX < messageX + messageWidth &&
      mouseY > messageTop && mouseY < messageBottom;
}

function generateRandom(min, max) {
    // normalize min and max values
    min = Math.ceil(min);
    max = Math.floor(max);

    // js representation of a complicated mathematical function to generate a random number
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

    textFont(barFont);
    stroke(1);
    strokeWeight(3);
    fill(255);
    textSize(30);
    text(helpMessage, helpMessageX, helpMessageY);

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
        if(moleUp === false) {
            if(timeDelta) {
                if(timeDelta < 1500) {
                    // if user is fast at clicking moles, give them the moles faster (next level)
                    setTimeout(drawMole, generateRandom(250, 1500));
                    moleUp = true;
                } else {
                    setTimeout(drawMole, generateRandom(1000, 3000));
                    moleUp = true;
                }
            } else {
                setTimeout(drawMole, generateRandom(1000, 3000));
                moleUp = true;
            }
        }

        if(((Date.now() - showTime) > 3000)) {
            if(playedPunishmentSound === false) {
                radarSound.play();
                playedPunishmentSound = true;
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

function showHelpAlert() {
    // need to reload page after showing help alert as game recognizes click on "ok" as start game action even though we don't want to start the game
    if(confirm('How to play Whack a Mole?\nTo play the game, simply click the mole. Your score will increase and you will hear audio feedback.\nOnce you start the game, moles will appear in random places on the screen at a random time interval.\nIf you click the moles fast, the game will give you more even faster, allowing you an opportunity to earn more points.\nClick as many moles as you can before the timer runs out to earn the most points.')){
        window.location.reload();  
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
    if (isMouseInsideText(helpMessage, helpMessageX, helpMessageY)) {
        showHelpAlert();
      }

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
        startSound.play();

        backgroundMusic.play();

        time = 30;
        isRunning = true;
        redrawBG();
    }

    if(mouseX => moleX && mouseX <= maxMoleX) {
        if(mouseY >= moleY && mouseY <= maxMoleY) {
            // Mole clicked. Increment score, remove mole, and start timeout for new one
            pointSound.pause();
            pointSound.currentTime = 0;

            clickTime = Date.now();
            timeDelta = clickTime - showTime;

            redrawBG();
            ++score
            moleUp = false;

            radarSound.pause();
            radarSound.currentTime = 0;

            pointSound.play();

            playedPunishmentSound = false;
        }
    }
}