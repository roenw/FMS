/**
 * "Catch the Fruit"
 * Brendan Waldrop
 */

// <<Universal Top Bar>>
var score = 0; // starting score
var time = 60; // start time
var gameStart = false; // game state

function preload() {
    jungleBg = loadImage('../assets/jungle.jpg');

    // <<Universal Top Bar>>
    backArrow = loadImage('../assets/backarrow.png');
    barFont = loadFont('../assets/titlefont.otf');
}

function setup() {
    createCanvas(window.screen.width - 100, window.screen.height - 150);
    
    tint(255, 128);
    background(jungleBg);
    noTint();
}
  
function draw() {

    // <<Universal Top Bar>>
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
    
    if (gameStart == true) {
        if (time > 0) {
            time -= 1/60;
        } else {
            time = 0;
            // insert game end event
        }
    }
    // End Bar
}

function mouseClicked() {
    // <<Universal Top Bar>>
    // Back Button
    if(mouseX > (width * 0.95) && mouseY < 35) {
        window.location.href = "/";
    }
}