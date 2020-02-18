//one line per second, canvas is however large the window is

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1)
}

//referred to https://p5js.org/reference/#/p5/pmouseX

function draw() {
line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
}
