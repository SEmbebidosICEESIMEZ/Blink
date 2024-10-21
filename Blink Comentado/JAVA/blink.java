// Clase Blink que representa la lógica para controlar el parpadeo de un LED en un pin GPIO
public class blink {

    // Método principal que actúa como el punto de entrada para ejecutar el programa
    public static void main(String args[]) {
        
        // Imprime un mensaje al usuario indicando cómo salir del programa
        System.out.println("Press CTRL-C to exit");

        // Manejo de excepciones para controlar posibles errores durante la ejecución
        try {
            // Creación de un objeto 'Runtime' que representa el entorno de ejecución del sistema
            Runtime runTime = Runtime.getRuntime();

            // Ejecuta un comando para configurar el pin GPIO 1 como salida
            // Esto se asemeja a la configuración de una propiedad de un objeto, 
            // donde el pin 1 es tratado como una entidad
            runTime.exec("gpio mode 1 out");

            // Bucle infinito que representa el comportamiento cíclico del objeto, similar a un método
            while (true) {
                // Ejecuta un comando para escribir un valor alto (1) en el pin GPIO 1, encendiendo el LED
                // Aquí, se envía una instrucción al objeto "GPIO", representando un cambio de estado
                runTime.exec("gpio write 1 1");

                // Suspende la ejecución del programa durante 500 milisegundos
                // Esto es equivalente a un método que introduce un retardo temporal
                Thread.sleep(500);

                // Ejecuta un comando para escribir un valor bajo (0) en el pin GPIO 1, apagando el LED
                runTime.exec("gpio write 1 0");

                // Pausa la ejecución por 500 milisegundos antes de volver a encender el LED
                Thread.sleep(500);

                // Imprime un mensaje en consola para mostrar que el LED está alternando
                System.out.println("led ");
            }
        } catch (Exception e) {
            // Maneja cualquier excepción que ocurra durante la ejecución del programa
            // Aquí se informa de cualquier error encontrado
            System.out.println("Exception occured: " + e.getMessage());
        }
    }
}
