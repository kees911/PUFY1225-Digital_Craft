//this is written in C+ and is not as intuitive as JS
//Global variables go here

void setup() {
    //Void means we aren't going to return any parameters
    //Runs once, ets everything up
    RGB.control(true);

}

void loop () {
    //continues forever
    
    /*this takes forever. there's a faster way
    RGB.color(200, 0, 0);
    delay(2000);
    RGB.color(0,0,0);
    delay(2000);*/
    
    //S
    flash(1000,255,0,0);
    flash(1000,255,0,0);
    flash(1000,255,0,0);
    
    //O
    flash(2000,0,255,0);
    flash(2000,0,255,0);
    flash(2000,0,255,0);
    
    //S
    flash(1000,255,0,255);
    flash(1000,255,0,255);
    flash(1000,255,0,255);

}

void flash(int duration, int rColor, int gColor, int bColor){
    RGB.color(rColor, gColor, bColor);
    delay(duration);
    RGB.color(0,0,0);
    delay(2000);
}