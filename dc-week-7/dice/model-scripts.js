//making sure that 'dice' is recognized globally in advance
var dice;


function preload() {
    //preloading in my dodecahedron 3D model
dice = loadModel('assets/dice.stl');
}

function setup() {
    //framerate(30);
    //creating the canvas
var canvas = createCanvas (400, 400, WEBGL);
    //assigning my canvas to a div in the HTML document so it can be more easily formatted
    canvas.parent('canvas');
    canvas.style('display', 'block');
   /* function roll() { //rolling the dice to get a number
   var result = Math.ceil(Math.random() * 20); 
} this function needs to be placed at the end of the document, not at the top.*/

}

function draw() {
    //white background to blend in
background(300);
    //just some fun movement that the dice does
    if (frameCount % 150 > 60) {rotateY(frameCount*0.1)}
    if (frameCount % 150 > 90) {rotateZ(frameCount*0.1)}
    else {rotateX(frameCount * 0.1);}
    pop();
    //making the model white, it is red by default
         ambientLight(255);
  specularMaterial(255,255,255);
    
    //the model
    model(dice);
    }

//so that the animation keeps going while you click and hold
function mousePressed() {
  loop();
}
   //animation stops and new number is printed as you let go
function mouseReleased() {
    
  noLoop();
    document.getElementById("initiative").innerHTML = 'You rolled a ' + roll() + '!';//printing out the randomized value into the visible html
}

