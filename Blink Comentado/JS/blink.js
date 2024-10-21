"use strict"; // Activa el modo estricto en JavaScript para una mejor gestión de errores y seguridad en la sintaxis

// Importa la biblioteca gpiox para controlar los pines GPIO como si fuera una clase externa que proporciona métodos para interactuar con hardware
const gpiox = require("@iiot2k/gpiox");

// Define el objeto `PIN` que actuará como un atributo de la clase, representando el pin GPIO a usar
const PIN = 18; // Pin GPIO donde se conectará el LED

// Define el objeto `INTERVAL` que actuará como una propiedad de la clase, representando el intervalo de parpadeo
const INTERVAL = 500; // Intervalo en milisegundos para alternar el estado del LED

// Inicializa el objeto GPIO como una salida, con un estado inicial de apagado (0)
// Este método se comporta como un constructor que configura las propiedades iniciales del objeto GPIO
gpiox.init_gpio(PIN, gpiox.GPIO_MODE_OUTPUT, 0);

// Define una propiedad de estado `ledState`, que controla si el LED está encendido o apagado
let ledState = 0;

// Método `setInterval` que funciona como un ciclo continuo dentro de la clase, alternando el estado del LED cada cierto intervalo
const intervalId = setInterval(() => {
    // Alterna el estado del LED usando una expresión ternaria; simula un método de "cambio de estado"
    ledState = (ledState === 0) ? 1 : 0; // Cambia el estado del LED (ON/OFF)
    
    // Llama al método que cambia el estado del pin GPIO, simulando el comportamiento de una clase que controla el hardware
    gpiox.set_gpio(PIN, ledState);

    // Verifica si el tiempo transcurrido ha superado los 10 segundos, detiene el parpadeo en ese caso
    // Esto actúa como un método de control del ciclo de vida del parpadeo
    if (Date.now() - startTime > 10000) { // Comprueba si han pasado 10 segundos (10000 ms)
        clearInterval(intervalId); // Detiene el ciclo de parpadeo al eliminar el intervalo
        gpiox.deinit_gpio(PIN); // Desinicializa el GPIO, liberando los recursos
        console.log("Parpadeo detenido y GPIO desinicializado."); // Imprime un mensaje indicando que se ha detenido
    }
}, INTERVAL);

// Guarda el tiempo de inicio en el objeto `startTime`, que será usado para controlar cuándo detener el parpadeo
const startTime = Date.now();
