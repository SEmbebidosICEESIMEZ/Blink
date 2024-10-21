import gpiod  # Importa la biblioteca para interactuar con los pines GPIO a nivel de sistema
import time  # Importa la biblioteca para manejar los tiempos de espera y retardo

# Definición de la propiedad que representa el pin donde está conectado el LED
LED_PIN = 18  # El pin GPIO 18 controlará el encendido y apagado del LED

# Crea un objeto `chip` que representa el chip de control GPIO
# En términos de POO, este objeto es la instancia de la clase `Chip`, que interactúa con el hardware
chip = gpiod.Chip('gpiochip4')  # Inicializa el chip GPIO correspondiente (gpiochip4)

# Crea un objeto `led_line` que representa la línea GPIO correspondiente al pin LED_PIN
# Este objeto se comporta como una abstracción de la línea GPIO
led_line = chip.get_line(LED_PIN)  # Obtiene la línea GPIO del pin 18

# Solicita acceso a la línea GPIO configurándola como salida
# Aquí, `request()` es un método que configura la dirección del pin y establece quién lo está usando
led_line.request(consumer='LED', type=gpiod.LINE_REQ_DIR_OUT)  # Configura el pin 18 como salida

# Bucle que alterna el estado del LED (encendido/apagado) continuamente
try:
    while True:
        # Establece el valor de la línea en 1, lo que enciende el LED
        # Este método `set_value()` cambia el estado del objeto LED, similar a un método de clase
        led_line.set_value(1)
        time.sleep(1)  # Pausa por 1 segundo (equivalente a un método de retardo)

        # Establece el valor de la línea en 0, lo que apaga el LED
        led_line.set_value(0)
        time.sleep(1)  # Pausa por 1 segundo
except KeyboardInterrupt:
    # Manejo de la interrupción del teclado (CTRL + C)
    # Cuando se interrumpe, se libera la línea GPIO y se cierra el chip, similar a la destrucción del objeto
    led_line.release()  # Libera la línea GPIO (comportamiento similar a un método de limpieza/destructor)
    chip.close()  # Cierra el chip GPIO, liberando recursos
