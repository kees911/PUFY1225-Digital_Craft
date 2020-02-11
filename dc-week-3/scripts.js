/*FIRST FUNCTION*/
//global variable
var odds;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 7; i < width; i+=7){
    odds = i%10;
    if (odds == 0){
      strokeWeight (3);
    } else {
      strokeWeight(1);
    }
    line (i,40, 40+i, 80);
    line (40+i, 80, i, 120);
    line (i, 120, 40+i, 160);
  }
  for (var j = 0; j <=10; j++){
    print(j);
  }
}

xRad = 20;
yRad = 20;

/*SECOND FUNCTION*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  for (var x=xRad/2; x < width; x+=xRad){
    for(var y=yRad/2; y < height; y+=yRad){
      fill("pink");
      ellipse(x,y,xRad,yRad);
      strokeWeight (2);
      line (x,y, mouseX, mouseY);
    }
}

  for (var x2 = 0; x2 < width + 25; x2+=xRad){
    fill("black");
    ellipse(x2, height-xRad/2, xRad, yRad);
  }

    for (var y2 = 0; y2 < height + 25; y2+=xRad){
    fill("black");
    ellipse(10, y2, 20, 20);
  }
}
