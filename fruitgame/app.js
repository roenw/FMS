var button;
var d;

function setup() {
    createCanvas(1200, 900);

    button = createImg('..backbutton.png');
    button.size(100, 100)
    button.position(1100, 700);
    

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

function mouseClicked() {
    d = dist(mouseX, mouseY, 1100, 700);
        if (d < 80) {
            console.log("mouse PRESSED");
            window.location.href = "/";
        }
}