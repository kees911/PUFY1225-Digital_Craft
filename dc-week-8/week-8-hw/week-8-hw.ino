//I thought my Photon would be here sooner, but due to issues relating to COVID-19 the microcontroller has been unable to be delivered yet. This is only a test that I am not sure would work in real life or not.

//Global variables go here

int led1 = D1;
int led2 = D2;
int led3 = D3;
int led4 = D4;
int led5 = D5;
int led6 = D6;
int photosensor = A5;

void setup() {
    //Void means we aren't going to return any parameters
    //Runs once, ets everything up
    pinMode (led1, OUTPUT);
    pinMode (led2, OUTPUT);
    pinMode (led3, OUTPUT);
    RGB.control(true);

}

void loop () {
    //continues forever
    //see void blink below for what the specified int values here refer to
    
    blink (led1, led6);
    blink (led2, led1);
    blink (led3, led2);
    blink (led4, led3);
    blink (led5, led4);
    blink (led6, led5);

}

/*I intended to create the illusion of continuous 'movement' of the light source between the pins, turning the next one on and the previous one off at the speed of 300ms per blink. While that is going on, I also intend for the photoresistor to detect and report the light level in the console as the light moves towards it, with the idea result showing that the light gets more intense the closer it is to the photoresistor.*/

void blink(int ledA, int ledB){
    digitalWrite(ledA, HIGH);
    digitalWrite(ledB, LOW);
    analogValue = analogRead(photosensor);
    Serial.println(analogValue);
    delay (300);
}