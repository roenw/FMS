/**
 * "Paint the Monkey"
 * Kevin Zhang
 */

// <<Universal Top Bar>>
var score = 0; // starting score
var strikes = 50;
var currColor = '#C78812';
let song;
let s1;
let s2;
let s3;
let s4;
let winderr;
var arr = [];

function preload() {
    // <<Universal Top Bar>>
    backArrow = loadImage('../assets/backarrow.png');
    barFont = loadFont('../assets/titlefont.otf');
    monkey1 = loadImage('../assets/monkey1.jpg');
    song = new Audio('../assets/sounds/uplifting-africa-84075.mp3');
    s1 = new Audio('../assets/sounds/one.mp3');
    s2 = new Audio('../assets/sounds/two.mp3');
    s3 = new Audio('../assets/sounds/three.mp3');
    s4 = new Audio('../assets/sounds/four.mp3');
    winderr = new Audio('../assets/sounds/error.mp3');
}

function setup() {
    cursor('../assets/cursor.png', 7, 55);
    createCanvas(window.screen.width - 100, window.screen.height - 150);
    background('#FFFFFF');
    song.play();
    
    image(monkey1, width * 0.26, height * 0.20, window.screen.height/1.1, window.screen.width/2.72);

    textFont(barFont);
    fill('black');
    textSize(25);
    text('PAINT UNTIL A SCORE OF 500', width/2.5, height/8);

    textFont(barFont);
    stroke(1);
    strokeWeight(3);
    fill(255);
    textSize(30);
    text('1', 85, 165);

    textFont(barFont);
    stroke(1);
    strokeWeight(3);
    fill(255);
    textSize(30);
    text('2', 85, 235);

    textFont(barFont);
    stroke(1);
    strokeWeight(3);
    fill(255);
    textSize(30);
    text('3', 85, 305);

    textFont(barFont);
    stroke(1);
    strokeWeight(3);
    fill(255);
    textSize(30);
    text('4', 85, 375);

    let clr = color('#36150D');
    fill(clr);
    noStroke();
    square(30, 130, 50,20);

    clr = color('#C78812');
    fill(clr);
    noStroke();
    square(30, 200, 50,20);

    clr = color('#FFF240');
    fill(clr);
    noStroke();
    square(30, 270, 50,20);

    clr = color('#FFD1AD');
    fill(clr);
    noStroke();
    square(30, 340, 50,20);

    stroke(currColor);
}
  
function draw() {
    // <<Universal Top Bar>>
    //bgMusic();
    textFont(barFont);
    stroke(1);
    strokeWeight(3);
    fill(255);
    textSize(20);
    text('Current Color:', window.width-170, 120);
    stroke (currColor);

    if (score == 200) {
        strikes = ceil(strikes/2);
    }

    if (score == 400) {
        strikes = ceil(strikes/2);
    }

    if (score == 450) {
        strikes = ceil(strikes/2);
    }

    if (score == 475) {
        strikes = ceil(strikes/2);
    }

    fill(currColor);
    square(window.width-115, 130, 50,20);

    getTopBar();
    if (mouseX <= 80 && mouseX >= 30) {
        stroke(getColor());
    }
    else if (mouseX >= 80) {
        strokeWeight(8);
        if(mouseIsPressed){
            if (inBoundary()) {
                //text(mouseX, 10, 30);
                //fill(0, 102, 153);
                var newCoord = mouseX;
                if (!arr.includes(newCoord)) {
                    score++;
                }

                let detectLine = get(mouseX, mouseY);
                arr.push(newCoord);
                if (detectLine != '0,0,0,255' || detectLine != '2,2,2,255'|| detectLine != '4,4,4,255') {
                line(mouseX,mouseY,pmouseX, pmouseY);
                }

                if (score > 499) {
                    background('#b6fc03');
                    getTopBar();
                    textSize(60);
                    textFont(barFont);
                    text('SUCCESS', width/2.45, height/2);
                    fill('green');
                    noLoop();
                    song.pause();
                }
            }

            else {
                if (strikes > 0) {
                    winderr.play();
                    outsideImg();
                }
                else {
                    background('black');
                    getTopBar();
                    textSize(60);
                    textFont(barFont);
                    fill('red');
                    text('GAME OVER', width/2.4, height/2);
                    song.pause();
                    noLoop();
                }
            }

  	    }
    }
}

function getPaintSize() {
    return 2;
}

function inBoundary() {
    if (currColor == '#36150D') {
        let getColor = get(mouseX, mouseY);
          if (getColor == '255,255,255,255' || getColor == '254,254,254,255' || getColor == '140,140,140,255' || getColor == '203,203,203,255' || getColor == '237,237,237,255' || getColor == '199,136,18,255'||getColor == '255,242,64,255'||getColor == '255,209,173,255') {
            return false;
        }
    }

    else if (currColor == '#C78812') {
        let getColor = get(mouseX, mouseY);
        if (getColor == '255,255,255,255' || getColor == '254,254,254,255' || getColor == '65,65,65,255' || getColor == '203,203,203,255' || getColor == '237,237,237,255'||getColor == '54,21,13,255'||getColor == '255,242,64,255'||getColor == '255,209,173,255') {
            return false;
        }
    }

    else if (currColor == '#FFF240') {
        let getColor = get(mouseX, mouseY);
        if (getColor == '255,255,255,255' || getColor == '254,254,254,255' || getColor == '140,140,140,255' || getColor == '65,65,65,255' || getColor == '237,237,237,255'||getColor == '54,21,13,255'||getColor == '199,136,18,255'||getColor == '255,209,173,255') {
            return false;
        }
    }

    else if (currColor == '#FFD1AD') {
        let getColor = get(mouseX, mouseY);
        if (getColor == '255,255,255,255' || getColor == '254,254,254,255' || getColor == '140,140,140,255' || getColor == '203,203,203,203' || getColor == '65,65,65,255'||getColor == '54,21,13,255'||getColor == '199,136,18,255'||getColor == '255,242,64,255') {
            return false;
        }
    }

    return true;
}

function getColor() {
    if (mouseY >= 130 && mouseY <= 180 && mouseIsPressed) {
        s1.play();
        currColor = '#36150D';
    }

    else if (mouseY >= 200 && mouseY <= 250 && mouseIsPressed) {
        s2.play();
        currColor = '#C78812';
    }

    else if (mouseY >= 270 && mouseY <= 320 && mouseIsPressed) {
        s3.play();
        currColor = '#FFF240';
    }

    else if (mouseY >= 340 && mouseY <= 390 && mouseIsPressed) {
        s4.play();
        currColor = '#FFD1AD';
    }
    return currColor;
}

function outsideImg() {
    textFont(barFont);
    fill('red');
    textSize(20);
    text('PAINTED OUTSIDE LINES', width/2.3, height/20);
    strikes--;
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

    textFont(barFont);
    stroke(1);
    strokeWeight(3);
    fill(255);
    textSize(30);
    text('Strikes: ', 350, 35);
    text(strikes, 470, 35);

    image(backArrow, width * 0.95, 5, 60, 40);
    pop();
}

function mouseClicked() {
    // <<Universal Top Bar>>
    // Back Button
    if(mouseX > (width * 0.95) && mouseY < 35) {
        window.history.back();
    }
}