var stats;
var presence = [];

function preload (){
    stats = loadTable("cm-attendance.csv");
}

function setup(){
    createCanvas (400,400);
    var rowCount = stats.getRowCount();
    for (var i = 0; i < rowCount(); i++){
        print presence();
    }

    
   /*for (var i = 0; i < stats.getRowCount(); i++){
        var lastName = stats.get(i,0);
        var firstName = stats.get(i,1);
        var email = stats.get(i,2);
        var preferredName = stats.get(i,3);
        var attendance1 = stats.get(i,4);
        print (lastName, firstName, email, preferredName, attendance1);
    }*/
}

function draw (){
    background(220);
    /*stroke(150);
    line(20,380,20,20);
    line(20,380,380,100);
    for (var i = 0; i < presence.length(); i++){
    var x = map(i,)
    }*/
}