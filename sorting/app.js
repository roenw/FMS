function setup() {
  createCanvas(1200, 900);
  
  let button;
  button = createButton('big balls');
  button.position(69, 69);
  button.mousePressed(changeBG);
}

function changeBG() {
  let val = random(255);
  background(val);
}

function draw() {
  background(135, 194, 258);
}
