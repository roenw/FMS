/**
 * "Catch the Fruit"
 * Brendan Waldrop
 */

// <<Universal Top Bar>>
var score = 0; // starting score
var time = 60; // start time
var isRunning = true; // game state
let bowl1;
let bowlImg;

function preload() {
    jungleBg = loadImage('../assets/jungle.jpg');
    bowlImg = loadImage('../assets/bowl.png');
    // <<Universal Top Bar>>
    backArrow = loadImage('../assets/backarrow.png');
    barFont = loadFont('../assets/titlefont.otf');
}

function setup() {
    createCanvas(window.screen.width - 100, window.screen.height - 150);
    

    bowl1 = new Bowl();
}
  
function draw() {
    bowl1.move();
    background(jungleBg);

    image(bowlImg, bowl1.x, bowl1.y, 150, 150);

    // <<Universal Top Bar>>
    getTopBar();
    // Timer
    if (isRunning == true) {
        if (time > 0) {
            time -= 1/60;
        } else {
            time = 0;
            // game end event
        }
    }
    
}

function mouseClicked() {
    // <<Universal Top Bar>>
    // Back Button
    if(mouseX > (width * 0.95) && mouseY < 35) {
        window.location.href = "FMS";
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

function keyReleased() {
    bowl1.setDir(0);
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        bowl1.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        bowl1.setDir(-1);
    }
}

class Bowl {
    constructor() {
        // this.x = constrain(width / 2 - 100, 0, width - 200);
        this.y = height * 0.80;
        this.x = width/2;
        this.xdir = 0;
    }

    setDir(dir) {
        this.xdir = dir;
    }

    move() {
        this.x += this.xdir * 8;
    }

}