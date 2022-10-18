var bg;

function preload(){
    bg = loadImage("https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80")
}

function setup() {
  createCanvas(1200, 900);
}

function draw() {
  tint(150, 255);
  background(bg);
  textSize(32);
  fill(255);
  text('Select a game to play!', 450, 40);
}