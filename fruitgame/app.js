var isRunning = false;
var button;

function setup() {
    createCanvas(1200, 900);

    button = createImg('../assets/backbutton.png');
    button.position(500, 500);
    button.mousePressed(console.log("mouse press"));

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