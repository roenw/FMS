/**
 * "Catch the Fruit"
 * Brendan Waldrop
 */

// <<Universal Top Bar>>
var score = 0.0; // starting score
var time = 30; // start time
var combo = 1.00;
var isRunning = false; // game state
var showHelp = true;
var highScore = 0;
let bowl1;
let bowlImg;

let difficulty = 5;
let volume = 1;

let fruitImg = [];
let rockImg = [];
let fruits = [];
let combos = [];
let stars = [];
let rocks = [];
let krits = [];


function preload() {
    jungleBg = loadImage('../assets/jungle.jpg');
    bowlImg = loadImage('../assets/bowl.png');
    kritImg = loadImage('../assets/krit.jpg');
    fruitImg[0] = loadImage('../assets/apple.png');
    fruitImg[1] = loadImage('../assets/banana.png');
    fruitImg[2] = loadImage('../assets/pineapple.png');
    rockImg[0] = loadImage('../assets/rock1.png');
    rockImg[1] = loadImage('../assets/rock2.png');
    starImg = loadImage('../assets/star.png');
    comboImg = loadImage('../assets/star2.png');
    arrowKeys = loadImage('../assets/arrowkeys.png');

    posSound = loadSound('../assets/sounds/pop2.mp3');
    superSound = loadSound('../assets/sounds/bigpop.wav');
    megaSound = loadSound('../assets/sounds/bigpop2.wav');
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

    for (i = 0; i < difficulty; ++i) {
        let r = new Rock();
        rocks.push(r);
    }

    for (i = 0; i < 1; ++i) {
        let k = new Krit();
        krits.push(k);
    }

    for (i = 0; i < 13; ++i) {
        let s = new Particle1();
        stars.push(s);
    }

    for (i = 0; i < 5; ++i) {
        let s1 = new Particle2();
        combos.push(s1);
    }


    bowl1 = new Bowl();
}
  
function draw() {
    bowl1.move();
    background(jungleBg);
    image(bowlImg, bowl1.x, bowl1.y, 150, 150);

    textSize(35);
    text('Combo: x', 30, 150);
    text(round(combo, 2), 190, 150);
    text('High Score: ', 30, 100);
    text(highScore, 230, 100);

    if (showHelp) {
        image(arrowKeys, width * 0.80, height * 0.75, 230, 170);
    }

   
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

            for (i = 0; i < rocks.length; ++i) {
                rocks[i].show();
                rocks[i].move();
                rocks[i].intersects();
            }

            for (i = 0; i < stars.length; ++i) {
                stars[i].show();
                stars[i].move();
            }

            for (i = 0; i < combos.length; ++i) {
                combos[i].show();
                combos[i].move();
            }


        } else {
            time = 0;
            // game end event
            if (score > highScore) {
                highScore = score;
            }

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
            text(round(score), width * 0.58, height * 0.65);
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
            combo = 1;
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
    text(round(score), 110, 35);
    text('Time: ', width * 0.44, 35);
    text(round(time), width / 2, 35);

    image(backArrow, width * 0.95, 5, 60, 40);
    pop();
}

function keyReleased() {
    bowl1.setDir(0);
}

function keyPressed() {
    showHelp = false;
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
        this.y = random(-500, 30);
        this.x = width * random(0.0, 1.0);
        this.img = random(fruitImg);
    }

    intersects() {
        let d = dist(this.x, this.y, bowl1.x, bowl1.y);
        if (d < 100) {
            this.respawn();
            score += (1 * combo);
            combo += 0.25;
            posSound.play();
            if (combo > 10) {
                megaSound.play();
                for (i = 0; i < stars.length; ++i) {
                    stars[i].play();
                }
                for (i = 0; i < combos.length; ++i) {
                    combos[i].play();
                }
            }
        }
    }

    origin() {
        this.y = random(-500, 30);
        this.x = width * random(0.0, 1.0);
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + 3;
        if (this.y > height * 0.99) {
            this.respawn();
        }
    }

    show() {
        image(this.img, this.x, this.y, 125, 125);
    }
}

class Rock {
    constructor() {
        this.y = random(-1000, 30);
        this.x = width * random(0.0, 1.0);
        this.img = random(rockImg);
    }

    respawn() {
        this.y = random(-500, 30);
        this.x = width * random(0.0, 1.0);
        this.img = random(rockImg);
    }

    intersects() {
        let d = dist(this.x, this.y, bowl1.x, bowl1.y);
        if (d < 100) {
            this.respawn();
            score -= (1 * combo);
            combo = 1.0;
            negSound.play();
        }
    }

    origin() {
        this.y = random(-500, 30);
        this.x = width * random(0.0, 1.0);
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + 3;
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
        this.y = random(-1000, 30);
        this.x = width * random(0.0, 1.0);
        this.img = kritImg;
    }

    respawn() {
        this.y = -5000;
        this.x = width * random(0.0, 1.0);
    }

    origin() {
        this.y = random(-1000, 30);
        this.x = width * random(0.0, 1.0);
    }

    intersects() {
        let d = dist(this.x, this.y, bowl1.x, bowl1.y);
        if (d < 100) {
            this.respawn();
            score += 10;
            combo += 5;
            posSound.play();
            superSound.play();
            for (i = 0; i < stars.length; ++i) {
                stars[i].play();
            }
        }
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + 10;
        if (this.y > height * 0.99) {
            this.respawn();
        }
    }

    show() {
        image(this.img, this.x, this.y, 125, 125);
    }
}

class Particle1 {
    constructor() {
        this.y = height + 1000;
        this.x = width * random(0.0, 1.0);

        this.img = starImg;
    }

    play() {
        this.y = -100;
        this.x = width * random(0.0, 1.0);
    }

    origin() {
        this.y = -100;
        this.x = width * random(0.0, 1.0);
    }

    move() {
        this.x = this.x + random(-20, 20);
        this.y = this.y + 15;
    }

    show() {
        image(this.img, this.x, this.y, 125, 125);
    }
}

class Particle2 {
    constructor() {
        this.y = height * random(0.0, 1.0);
        this.x = 100 - width;

        this.img = comboImg;
    }

    play() {
        this.y = height * random(0.0, 1.0);
        this.x = width + 300;
    }

    move() {
        this.x = this.x - 30;
        this.y = this.y + random(-20, 20);
    }

    show() {
        image(this.img, this.x, this.y, 200, 125);
    }
}