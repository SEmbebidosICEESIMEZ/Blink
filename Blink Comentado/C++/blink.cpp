#include <stdio.h>        // Clase base que gestiona las operaciones de entrada/salida del sistema
#include <wiringPi.h>     // Clase que permite interactuar con el hardware GPIO de la Raspberry Pi
#include <time.h>         // Clase utilizada para manejar el tiempo, aunque no se utiliza en este caso

// Clase principal del programa que contiene la lógica de control del GPIO
int main(void) {

    // Inicialización del sistema de gestión de GPIO.
    // Aquí wiringPi actúa como una clase que encapsula el acceso al hardware de GPIO.
    wiringPiSetupGpio(); 

    // Asignamos una "propiedad" a nuestro objeto GPIO representado por el pin 18.
    // El pin 18 se configura como una propiedad de salida (OUTPUT), definiendo su estado.
    pinMode(18, OUTPUT);

    // Bucle infinito que simula un método de la clase "ControladorGPIO" que gestiona la lógica del pin
    for (;;) {
        // Método para activar el "objeto" pin 18, estableciendo su estado en alto (HIGH).
        digitalWrite(18, HIGH);

        // Método delay actúa como una pausa entre los estados de la propiedad del pin 18, 
        // simulando el comportamiento de un temporizador.
        delay(500);  // Espera 500 ms

        // Método para desactivar el "objeto" pin 18, estableciendo su estado en bajo (LOW).
        digitalWrite(18, LOW);

        // Nuevamente, el método delay gestiona la pausa entre las transiciones de estado del pin.
        delay(500);  // Espera otros 500 ms
    }

    // Fin del método principal de la clase, el retorno es simbólico ya
