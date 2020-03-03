var donut;
function preload(){
donut = loadImage('assets/sprinkles.jpg');
}

function setup(){
createCanvas (400, 400, WEBGL);
}

function draw(){
background(220);
rotateZ(frameCount *0.01);
  rotateY(frameCount *0.01);
  rotateX(frameCount *0.01);
  
	lx = mouseX - height/2;
  ly = mouseY - width/2;
  
  noStroke();
  texture(donut);
  torus (200, 50);
  
  

}