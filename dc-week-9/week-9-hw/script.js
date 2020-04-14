var stats
var rating = [];

function preload (){
    stats = loadTable("ocl.csv");
}

function setup(){
    createCanvas (400,400);
    var rowCount = stats.getRowCount();
    for (var i = 0; i < rowCount(); i++){
        print.rating();
    }


for (var i = 0; i < stats.getRowCount(); i++){
        var yearsOnCampus = stats.get(i,0);
        var roommateSatisfaction = stats.get(i,1);
        var amenitiesRating = stats.get(i,2);
        var staffRating = stats.get(i,3);
        var roomPlacement = stats.get(i,4);
        print (yearsOnCampus, roommateSatisfaction, amenitiesRating, staffRating, roomPlacement);
    }
}

function draw (){
    background(220);
    stroke(150);
    line(20,380,20,20);
    line(20,380,380,100);
    for (var i = 0; i < rating.length(); i++){
    var x = map(i,)
    }
}
