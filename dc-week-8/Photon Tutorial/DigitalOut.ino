int led0 = D0;
int led7 = D7;

void setup(){
    pinMode(led0, OUTPUT); //tells the pin what it's going to be used for
    pinMode(led7, OUTPUT);
}

void loop(){
    digitalWrite(led7, HIGH); //(pin you're writing to, high/low)
    digitalWrite(led0, LOW);
    delay(2000);
    digitalWrite(led7, LOW);
    digitalWrite(led0, HIGH);
    delay(2000); //things like this can also be used to control motors
}