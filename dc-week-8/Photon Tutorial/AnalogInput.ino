int led0 = D0;
double volts = 0.0; //double - a really long decimal
int analogPin = A0;
int reading = 0;
//int photoResistor = A0
//int analogValue; //hold for now
//int ledToggle(STRING command); //forward declaration- use this to connect to other internet applications

void setup(){
    Serial.begin()
    
    pinMode(led0, OUTPUT);
    
    Spark.variable("analog", &reading, INT);
    Spark.variable("volts", &volts, DOUBLE)
    
    //Particle.variable("analogValue", &analogValue, INT); //will pass through in post in an API, look out for it, this is the value that will be assigned for it (analogvalue) and its type (int)
    
   // Particle.function("led", ledToggle);
}

void loop(){
    //analogValue = analogRead(photoResistor);
    //Serial.printlnf("%d", analogValue);//%d = decimal
    reading = analogRead(analogPin);
    volts = reading * 3.3/4096.0; //3.3 = amount of volts you can push through this board, 4096 = maximum reading you can have
}