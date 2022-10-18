var isRunning = false;

function setup() {
    createCanvas(1200, 900);

    let score = new ScoreBoard(0);
    let time = new Timer(10);
    score.drawBoard();

    score.updateBoard();
    score.setScore(10);
    score.addScore(10);
    console.log(score.getScore());
    console.log(time.getTimer());
    score.updateBoard();
}
  
function draw() {
}