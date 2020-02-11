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
/*I don't know how to get this to respond to the actual slider.
I think it has something to do with render() or a delay/refresh,
but I don't know how I would implement that without refreshing the entire canvas
as the stroke color function is part of the setup function*/

var rColor = "rSlider.value";
var gColor = "gSlider.value";
var bColor = "bSlider.value";
//var opacity = "aSlider.value"

function draw(){
  stroke (rOutput.innerHTML, gOutput.innerHTML, bOutput.innerHTML);
}

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

/*var aSlider = document.getElementById("opacity");
var aOutput = document.getElementById("aValue");
aOutput.innerHTML = aSlider.value;

aSlider.oninput = function() {
  aOutput.innerHTML = this.value;
}
*/
