function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1)
}

function draw() {
line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
}