/*the purpose of this piece is to randomly draw lines, nonstop.
the lines are random in their length, orientation and position.*/

//mouse coordinate display from https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
/*    function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
      }
      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        writeMessage(canvas, message);
      }, false);*/


function randCoord(factor){
  if (factor == undefined){
    factor = 600;
}
    return Math.random() * factor;
}

//randCoord code source: https://stackoverflow.com/questions/21025677/js-randomize-lineto

function timedDraw() {
setInterval(lineStart, 1000);
setInterval(lineEnd, 2000);
}

//timer code from: https://www.w3schools.com/js/js_timing.asp

function lineStart(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(randCoord(),randCoord());
}
function lineEnd(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
ctx.lineTo(randCoord(),randCoord());
ctx.stroke();
}

//regular line drawing code
