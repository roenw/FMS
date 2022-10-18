class ScoreBoard {
    // FIXME #1 fix score counter
    constructor(startNum){
        this.score = startNum;
    }

    // gets current score
    getScore() {
        return this.count;
    }

    // set score
    setScore(num) {
        this.count = num;
    }

    // add to score
    addScore(num) {
        this.count += num;
    }

    // subtract from score
    subScore(num) {
        this.count -= num;
    }

    // draws top bar with text
    drawBoard() {
        strokeWeight(1);
        stroke(50);
        rect(0, 0, 1200, 40, 0, 0, 20, 20);
        textSize(20);
        text('Score: ', 530, 25);
    }

    // fills over previous score and draws current score
    updateBoard() {
        noStroke();
        rect(360, 5, 100, 30);
        text(this.score, 400, 25);
    }
}