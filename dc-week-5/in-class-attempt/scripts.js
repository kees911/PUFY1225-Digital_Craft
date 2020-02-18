function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  frameRate(1)
}

function draw() {
stroke('blue');
strokeWeight(1);
line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
}

function mousePressed(){
save();
noLoop();
}