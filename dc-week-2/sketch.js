//Setup f'n only run once. Everything is going to run in that f'n.
function setup() {
  createCanvas(400, 400);
}

//will continually run.
function draw() {
  background(300);
  strokeWeight(6);
  stroke(5);
  //left column
  fill(255,255,255);
  rect(0,0,100,50);
  rect(0,50,50,100);
  rect(0,150,50,150);
  fill("#fff000");
  rect(0,300,50,100);
  //top row, right sides
  fill(255,255,255);
  rect(100,0,150,50);
  fill("#fff000");
  rect(250,0,125,50);
  //large square
  fill("#f00000");
  rect(50,50,200,200);
  //below the big red square
  //small black square
  fill(0,0,0);
  rect(50,250,100,100);
  fill(255,255,255);
  rect(50,350,100,50);
  //second column below big red square
  fill(255,255,255);
  rect(150,250,100,50);
  rect(150,300,100,50);
  rect(150,375,225,25);
  fill(0,0,0);
  rect(150,350,100,25);
//last column
fill("#fff000");
rect(250,50,125,100);
fill(255,255,255);
rect(250,150,62.5,100);
rect(312.5,150,62.5,100);
rect(250,250,125,50);
fill(0,0,255);
rect(250,300,125,75);
//lower red item
fill("#f00000");
rect(375,300,25,100);
}
