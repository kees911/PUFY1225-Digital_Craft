//randomized bg color from https://stackoverflow.com/questions/52034279/how-do-i-give-a-div-a-random-background-color-from-6-options/52034448
getNewRandomColor();

function getNewRandomColor()
{
    var myArray = ['#D8BFD8', '#B0E0E6', '#8FBC8F'];    
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementsByTagName("body")[0].style.backgroundColor = rand;
}

//clock funtion from https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

//
function setGoal(){
var name = prompt("Enter your goal for today: ");
if (name != null) {
  document.getElementById("paragraph").innerHTML =
  "My goal is to " + name + " today.";
}
}

//dropdown navigation menu from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn3')) {
    var dropdowns3 = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}