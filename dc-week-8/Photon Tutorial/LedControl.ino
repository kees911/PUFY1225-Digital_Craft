int led0 = D0
int ledToggle(String command); //forward declaration

void setup(){
    pinMode(led0, OUTPUT);
    
    Particle.function("led", ledToggle);
    
}

void loop(){

}

int ledToggle(String command){
    if (command == "on"){
        digitalWrite(led0, HIGH);
        return 1;
        
    }
    
    else if(command == "off"){
        digitalWrite(led0, LOW);
        return 0;
    }
    
    else {
        return -1;
    }
}