

function setup() {
    // Create SVG Canvas
    createCanvas(windowWidth, windowHeight, SVG);

    frameRate(1)
    strokeWeight(1);
    stroke('#FF0000');
}

function draw() {

	line(mouseX, mouseY, pmouseX, pmouseY);
    print(pmouseX + ' -> ' + mouseX);
	print(frameCount);
  	if (mouseIsPressed) {
        noLoop();
        save();
        print(mouseIsPressed);
    }
}
