class BackButton {
    constructor() {
    }

    drawButton() {
        button = creatButton("Home");
        button.position(1100, 700);
        button.mousePressed(this.redirectUser("/"));
    }

    redirectUser(url) {
        window.location.href = url;
    }


}