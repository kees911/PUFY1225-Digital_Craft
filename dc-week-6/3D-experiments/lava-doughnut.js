function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  
  rectMode(CENTER);
  rotateZ(frameCount *0.01);
  rotateY(frameCount *0.01);
  rotateX(frameCount *0.01);
  fill('white');
  box (100,100,100); //(W,H,D).there is no positioning in this, only dimensions.
  //to change the position of the box we have to use translation functions
  
  noStroke();
  fill('blue');
  plane(150,150);
  
  lx = mouseX - height/2;
  ly = mouseY - width/2;

  ambientLight(255);
  pointLight(255,0,0,lx, ly,100);
   pointLight(255,165,0,lx, ly,100);
  pointLight(0,255,0,-lx, -ly,100);
  specularMaterial(255,0,0);
  torus(200,50);
}

