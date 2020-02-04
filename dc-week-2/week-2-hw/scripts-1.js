/*sources:
Simple Draw (mobile) https://p5js.org/examples/mobile-simple-draw.html
^This is the main one I used
Drawing: https://p5js.org/examples/hello-p5-drawing.html
Lines: https://p5js.org/examples/drawing-continous-lines.html
Pulses https://p5js.org/examples/drawing-pulses.html
*/
function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(5);
}

var rColor = "rSlider.value";
var gColor = "gSlider.value";
var bColor = "bSlider.value";

function draw(){
  stroke (rOutput.innerHTML, gOutput.innerHTML, bOutput.innerHTML);
}

/*I also wrote code that was meant to correspond to a 0-100 opacity (alpha) slider,
but I could not get it to work, so it has been omitted from the GitHub submission*/

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

var rSlider = document.getElementById("red");
var rOutput = document.getElementById("rValue");
rOutput.innerHTML = rSlider.value;

rSlider.oninput = function() {
  rOutput.innerHTML = this.value;
}

var gSlider = document.getElementById("green");
var gOutput = document.getElementById("gValue");
gOutput.innerHTML = gSlider.value;

gSlider.oninput = function() {
  gOutput.innerHTML = this.value;
}

var bSlider = document.getElementById("blue");
var bOutput = document.getElementById("bValue");
bOutput.innerHTML = bSlider.value;

bSlider.oninput = function() {
  bOutput.innerHTML = this.value;
}
