//Setup f'n only run once. Everything is going to run in that f'n.
function setup() {
  createCanvas(400, 400);
}

//will continually run.
function draw() {
  background("#ffffff");
  //removes outline
  noStroke();
  //ellipse (x pos, y pos, width, height)
  //draws from the center
  ellipse(100,100,50,50);
  //makes rectangle xy pos be defined from its center instead of from its top left corner
  rectMode(CENTER);
  //
  stroke(5);
  //usually draws from top left corner
  rect(200,200,50,50);
}

//
