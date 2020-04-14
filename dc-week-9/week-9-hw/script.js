var rating=[]; //the main variable used to refer to values within the csv file
var stats; //the main variable used to refer to the loaded csv file as a whole
var rowcount;

function preload (){
    stats = loadTable("https://kees911.github.io/PUFY1225-Digital_Craft/dc-week-9/week-9-hw/ocl.csv", "csv", "header");
}//pre-loading in the csv table, which did not work locally so I have hosted it online.

function setup(){
    createCanvas (500,500); //create the canvas
rowCount = stats.getRowCount(); //get the number of rows in the csv file, which should be 58.
    //For some reason, the code seems unable to draw 'stats' from the preload.
    var columnCount = stats.getColumnCount(); //get the number of columns in the csv file, which should be 6
    for (var i = 0; i < rowCount; i++){ //data is read row by row increasing in increments of 1
    rating[i] = stats.getNum(i,1); //
  }
    function draw() {
  //background(0);
 // fill(0);
  //stroke(0);
//note "-1"
  rowCount = stats.getRowCount()
  for (var j = 0; j < rowCount; j++) {
    //place x-axis values
    text(stats.getString(j, 0), j * 30 + 60, 450);
    //place numbers
    rating[j] = stats.getString(j, 1);
  }
    //draw graph 1
    stroke("red");
    line (i * 30 + 60, 420-rating[j], (j+1) * 30 + 60, 420-rating[j+1])
  //draw graph 2
  stroke("blue");
  line (j * 30 + 60, 420-rating[j], (j+2) * 300 + 60, 420-rating[i+2])
    //draw graph 3
    stroke("yellow");
    line (j * 30 + 60, 420-rating[j], (j+3) * 30 + 60, 420-rating[j+3])
    //draw graph 4
    stroke("green");
    line (j * 30 + 60, 420-rating[j], (j+4) * 30 + 60, 420-rating[j+4])
}

/*for (var i = 0; i < stats.getRowCount(); i++){
        var yearsOnCampus = stats.get(i,0);
        var roommateSatisfaction = stats.get(i,1);
        var amenitiesRating = stats.get(i,2);
        var staffRating = stats.get(i,3);
        var roomPlacement = stats.get(i,4);
        print (yearsOnCampus, roommateSatisfaction, amenitiesRating, staffRating, roomPlacement);
    }*/

//source of code from here onwards: https://editor.p5js.org/jsarachan/sketches/Hyul-6OC-.
//The scale is off but the effect is otherwise what I intended, though it doesn't seem to show up anymore for unknown reasons.


   //determine highest value
   maxValue=max(rating);
  for (var k=0;k<maxValue;k=k+1){
    text(k,10,420-k);
  }

}
