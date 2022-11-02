/**
 * "Catch the Fruit"
 * Brendan Waldrop
 */

// <<Universal Top Bar>>
var score = 0; // starting score
var time = 30; // start time
var isRunning = false; // game state
let bowl1;
let bowlImg;

let difficulty = 5;
let volume = 1;

let fruitImg = [];
let fruits = [];
let krits = [];


function preload() {
    jungleBg = loadImage('../assets/jungle.jpg');
    bowlImg = loadImage('../assets/bowl.png');
    kritImg = loadImage('../assets/krit.jpg');
    fruitImg[0] = loadImage('../assets/apple.png');
    fruitImg[1] = loadImage('../assets/banana.png');
    fruitImg[2] = loadImage('../assets/pineapple.png');
    posSound = loadSound('../assets/sounds/pop2.mp3');
    negSound = loadSound('../assets/sounds/pop1.mp3');
    bgSound = loadSound('../assets/sounds/background1.mp3');
    startSound = loadSound('../assets/sounds/start1.wav');
    iphoneSound = loadSound('../assets/sounds/radar.mp3');
    fartSound = loadSound('../assets/sounds/fart2.mp3');
    // <<Universal Top Bar>>
    backArrow = loadImage('../assets/backarrow.png');
    barFont = loadFont('../assets/titlefont.otf');
}

function setup() {
    createCanvas(window.screen.width - 100, window.screen.height - 150);
    bgSound.loop();
    


    for (i = 0; i < difficulty; ++i) {
        let f = new Fruit();
        fruits.push(f);
    }

    for (i = 0; i < difficulty - 2; ++i) {
        let k = new Krit();
        krits.push(k);
    }


    bowl1 = new Bowl();
}
  
function draw() {
    bowl1.move();
    background(jungleBg);
    image(bowlImg, bowl1.x, bowl1.y, 150, 150);

   
    // <<Universal Top Bar>>
    getTopBar();
    if (isRunning == false) {
        textFont(barFont);
        stroke(1);
        strokeWeight(3);
        fill(255);
        textSize(75);
        text('START', width * 0.43, height / 2);
        textSize(50);
        text('Score', width * 0.43, height * 0.65);
        text(score, width * 0.55, height * 0.65);
    }
    
    // Timer
    if (isRunning == true) {
        if (time > 0) {
            time -= 1/60;

            for (i = 0; i < krits.length; ++i) {
                krits[i].show();
                krits[i].move();
                krits[i].intersects();
            }

            for (i = 0; i < fruits.length; ++i) {
                fruits[i].show();
                fruits[i].move();
                fruits[i].intersects();
            }

        } else {
            time = 0;
            // game end event
            textFont(barFont);
            stroke(1);
            strokeWeight(3);
            fill(255);
            textSize(70);
            text('GAME OVER', width * 0.40, height / 2);
            textSize(30);
            text('Click Me to Play Again', width * 0.41, height * 0.55);
            textSize(50);
            text('Score', width * 0.45, height * 0.65);
            text(score, width * 0.58, height * 0.65);
        }
    }
    
}

function mouseClicked() {
    // <<Universal Top Bar>>
    // Back Button
    let d = dist(mouseX, mouseY, width / 2, height * 0.45);
        if (d < 100) {
            startSound.play();
            isRunning = true;
            time = 30;
            score = 0;
            for (i = 0; i < krits.length; ++i) {
                krits[i].origin();
            }

            for (i = 0; i < fruits.length; ++i) {
                fruits[i].origin();
            }
        }

    if(mouseX > (width * 0.95) && mouseY < 35) {
        window.history.back();
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
        // fartSound.play();
        bowl1.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        // fartSound.play();
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

class Fruit {
    constructor() {
        this.y = random(-500, 30);
        this.x = width * random(0.0, 1.0);
        this.img = random(fruitImg);
    }

    respawn() {
        this.y = 30;
        this.x = width * random(0.0, 1.0);
        this.img = random(fruitImg);
    }

    intersects() {
        let d = dist(this.x, this.y, bowl1.x, bowl1.y);
        if (d < 100) {
            this.respawn();
            ++score;
            posSound.play();
        }
    }

    origin() {
        this.y = random(-500, 30);
        this.x = width * random(0.0, 1.0);
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + 2;
        if (this.y > height * 0.99) {
            this.respawn();
        }
    }

    show() {
        image(this.img, this.x, this.y, 125, 125);
    }
}

class Krit {
    constructor() {
        this.y = random(-500, 30);
        this.x = width * random(0.0, 1.0);
        this.img = kritImg;
    }

    respawn() {
        this.y = 30;
        this.x = width * random(0.0, 1.0);
    }

    origin() {
        this.y = random(-500, 30);
        this.x = width * random(0.0, 1.0);
    }

    intersects() {
        let d = dist(this.x, this.y, bowl1.x, bowl1.y);
        if (d < 100) {
            this.respawn();
            --score;
            negSound.play();
        }
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + 2;
        if (this.y > height * 0.99) {
            this.respawn();
        }
    }

    show() {
        image(this.img, this.x, this.y, 125, 125);
    }
}