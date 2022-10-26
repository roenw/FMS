/**
 * "Paint the Monkey"
 * Kevin Zhang
 */

// <<Universal Top Bar>>
var score = 0; // starting score

function preload() {
    // <<Universal Top Bar>>
    backArrow = loadImage('../assets/backarrow.png');
    barFont = loadFont('../assets/titlefont.otf');
    monkey1 = loadImage('../assets/monkey1.jpg');
}

function setup() {
    background('#FFFFFF');
    createCanvas(window.screen.width - 100, window.screen.height - 150);
    image(monkey1, width * 0.26, height * 0.20, 700, 470);

    textFont(barFont);
    noStroke();
    strokeWeight(3);
    fill('#000000');
    textSize(20);
    text('Colors: ', width * 0.022, height * 0.17);

    let c = color('#36150D');
    fill(c);
    noStroke();
    square(30, 130, 55,20);

    c = color('#C78812');
    fill(c);
    noStroke();
    square(30, 200, 55,20);

    c = color('#FFF240');
    fill(c);
    noStroke();
    square(30, 270, 55,20);

    c = color('#FFD1AD');
    fill(c);
    noStroke();
    square(30, 340, 55,20);
}
  
function draw() {
    // <<Universal Top Bar>>
    getTopBar();
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