function setup() {
    createCanvas(1200, 900);

    let score = new ScoreBoard(0);
    score.drawBoard();

    score.updateBoard();
    score.setScore(10);
    score.addScore(10);
    console.log(score.getScore());
    score.updateBoard();
}
  
function draw() {
}