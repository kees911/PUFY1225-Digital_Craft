let cam;
//function preload(){}


function setup(){
createCanvas (400, 400, WEBGL);
 noStroke();
  
  cam = createCapture(VIDEO);
  cam.hide();
  audio = false;
}

function draw(){
background(300);

rotateZ(frameCount *0.01);
  rotateY(frameCount *0.01);
  rotateX(frameCount *0.01);
  box (100, 100, 100);
	//lx = mouseX - height/2;
  //ly = mouseY - width/2;
  
// push()
  texture(cam);
  //scale(600);
}
