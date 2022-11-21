// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {
  constructor(x, y, w, h, s, c) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
    this.shape = s;
    this.color = c;
    this.posx = this.x + 50;
    this.posy = this.y + 50;
    this.score = 0;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(this.color);
    } else if (this.rollover) {
      fill(this.color);
    } else {
      fill(this.color);
    }
    if (this.shape == 0) {
      rect(this.x, this.y, this.w, this.h);
    } 
    if (this.shape == 1) {
      rect(this.x, this.y, this.w, this.h,50);
    }
    if (this.shape == 2) {
      triangle(this.x, this.y + this.h, this.x + (this.w / 2), this.y, (this.x + this.w), (this.y + this.h));
    }
    
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }

  intersects() {
    this.posx = this.x + 50;
    this.posy = this.y + 50;
    // <<Level One>>
    if (mode == 0){
    if (this.posx > width * 0.25 - 125 && this.posx < (width * 0.25 - 125) + 250 && this.posy > height * 0.55 && this.posy < (height * 0.55) + 250) {
      if (this.color == 'blue'){
        this.score = 1;
        correct.play();
      }
    } 
  }

  if (mode == 0){
    if (this.posx > width * 0.5 - 125 && this.posx < (width * 0.5 - 125) + 250 && this.posy > height * 0.55 && this.posy < (height * 0.55) + 250) {
      if (this.color == 'red'){
        this.score = 1;
        correct.play();
      }
    }
  }

  if (mode == 0){
    if (this.posx > width * 0.75 - 125 && this.posx < (width * 0.75 - 125) + 250 && this.posy > height * 0.55 && this.posy < (height * 0.55) + 250) {
      if (this.color == 'green'){
        this.score = 1;
        correct.play();
      }
    }
  }

  // <<Level Two>>
  if (mode == 1){
    if (this.posx > width * 0.25 - 125 && this.posx < (width * 0.25 - 125) + 250 && this.posy > height * 0.55 && this.posy < (height * 0.55) + 250) {
      if (this.shape == 0){
        this.score = 1;
        correct.play();
      }
    } 
  }

  if (mode == 1){
    if (this.posx > width * 0.5 - 125 && this.posx < (width * 0.5 - 125) + 250 && this.posy > height * 0.55 && this.posy < (height * 0.55) + 250) {
      if (this.shape == 1){
        this.score = 1;
        correct.play();
      }
    }
  }

  if (mode == 1){
    if (this.posx > width * 0.75 - 125 && this.posx < (width * 0.75 - 125) + 250 && this.posy > height * 0.55 && this.posy < (height * 0.55) + 250) {
      if (this.shape == 2){
        this.score = 1;
        correct.play();
      }
    }
  }
}
}