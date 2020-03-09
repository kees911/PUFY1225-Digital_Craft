/*everything below here has to do with the text below the canvas*/

/*for some reason this is now the only function that needs to be placed at the end of the document as opposed to at the top.*/
function roll() { //rolling the dice to get a number
   var result = Math.ceil(Math.random() * 20); //generates a random whole number between 1 and 20,
    return result; //displays the result of the randomized calculation above
}

/*everything below here is now irrelevant...*/

/*console.log('You rolled a ' + roll() + '!'); //printing out the number we get alongside the phrase 'you rolled a #!', commented out as for some reason the number printed here was different from the one printed to the webpage and could be confusing.*/


/*writeToHtml('You rolled a ' + roll() + '!'); //printing out the number we get alongside the phrase 'you rolled a #!'

function writeToHtml(rollValue) {
    var initiative = document.getElementById("initiative");
    initiative.innerHtml = rollValue;
}*/ //old attempt at printing to the HTML document

   
/*function mouseReleased() {
  document.getElementById("initiative").innerHTML = 'You rolled a ' + roll() + '!'; //printing out the randomized value into the visible html
}
*/
