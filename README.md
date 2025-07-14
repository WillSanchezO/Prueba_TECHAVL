# Pruebas QA – Simulación de eventos GPS (TechAVL)

Lo siguiente representa una simulación de pruebas básicas automatizadas para una plataforma de rastreo GPS tipo TechAVL, utilizando el entorno **[Traccar Demo](https://demo.traccar.org)** como servidor de prueba. Se implementaron pruebas manuales con Postman y automatizadas con Cypress para validar eventos críticos de monitoreo.

---

## Herramientas usadas

- **Traccar Demo** – Plataforma para rastreo GPS en tiempo real.
- **Postman** – Simulación de envío de datos GPS por HTTP.
- **Cypress** – Automatización UI para validar visualización de eventos.
- **Curl** – Comandos directos para simular desde Gitbash la ubicación del dispositivo(./simular_ruta_BRY137.sh)

## Pasos para ejecutar:
- Iniciar sesión en la url https://demo.traccar.org/
- creenciales user:awilliam.sanchez@gmail.com - pass: 123456789*
- ejecutar desde Gitbash los comandos directos para simular la ubicación del dispositivo (simular_rutas_ABC123) u opcional lanzar simulaciones de ubicaciones una a una con Postman (Simulación_Rutas_Traccar.postman_collection)
- ejecutar simulación desde cypress
- ejecutar pruebas de api desde Postman

---

# Pruebas realizadas

---

# Automatización con Cypress

Se automatizó la validación visual en la plataforma Traccar:

- Verificar que el dispositivo está visible en el mapa
- Validar que se actualice su ubicación
- Confirmar que los eventos de exceder limite de velocidad, dispositivo inactivo y salida de geozona se reporten de forma correcta

> Ruta del test: '/cypress/e2e/1-getting-started/eventosvehiculo.cy.js'


## Postman con Newman::

1. Exceso de velocidad
- Se configuró un umbral de velocidad de 50,70, 80 y null km/h.
- Se simulan una posición GPS con velocidades menores, iguales o superiores a las permitidas.
- Se validó que el evento de "Excedido el limite de velocidad" se mostrara en la plataforma.
- Se validó que el evento de "Dispositivo Inactivo" se mostrara en la plataforma.
- Se validó que el evento de "Salida de la Geo-zona" se mostrara en la plataforma.

---

2. Salida de geocerca
- Se creó una geocerca circular de prueba.
- Se asignó al dispositivo `864893032752255`.
- Se simuló una posición fuera del área permitida.

---

3. Pruebas de APIS SESSION, DEVICES, SERVER
- Se enviaron pruebas que validen que el codigo del status sea 200
- Se lanza prueba para validar que el name de usuario no sea nulo
- Se ejecutan pruebas que filtrar dispositivos que tienen configurado el limite de velocidad
- Prueba para validar que el campo 'hide' esté en true
- prueba para informa cuando no esté presente el atributo 'hide'


---

4. Simulación de rutas en TRACCAR
- Se simularon posiciones en ruta de forma manual.
- Se envían los movimientos de acuerdo con la velocidad requerida del envío.
- Se simularon las pruebas solo con el ID de dispositivo 864893032752255.


---

## Notas adicionales

- El dispositivo simulado usó el ID '864893032752255', '', '',''
- El protocolo usado fue 'osmand' vía HTTP (puerto 5055)
- No se utilizó HTTPS debido a restricciones de curl en Windows

---

## ✅ Recomendaciones

- Para entornos reales como TechAVL, solicitar acceso al servidor GPS y protocolos específicos
- Las simulaciones con Traccar son representativas de la mayoría de plataformas AVL



