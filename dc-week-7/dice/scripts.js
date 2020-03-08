var dice;

function preload(){
dice = loadModel('/assets/dice.obj')
}

function setup(){
createCanvas (400, 400, WEBGL);
}

function draw(){
background(220);
rotateZ(frameCount *0.01);
  rotateY(frameCount *0.01);
  rotateX(frameCount *0.01);

 ambientLight(255);
  pointLight(255,0,0,lx, ly,100);
   pointLight(255,165,0,lx, ly,100);
  pointLight(0,255,0,-lx, -ly,100);
  specularMaterial(255,0,0);
    
    push();
    pop();
}

/*everything below here has to do with the text below the canvas*/

function roll() { //rolling the dice to get a number
   var result = Math.ceil(Math.random() * 20); //generates a random whole number between 1 and 20,
    return result; //displays the result of the randomized calculation above
}

console.log('You rolled a ' + roll() + '!'); //printing out the number we get alongside the phrase 'you rolled a #!'
