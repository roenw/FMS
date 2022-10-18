var bg;

function preload() {
    bg = loadImage('../assets/grass.jpg')
}

function setup() {
    createCanvas(1200, 900);

    background(bg);

    let score = new ScoreBoard(0);
    score.drawBoard();
}
  
function draw() {
}