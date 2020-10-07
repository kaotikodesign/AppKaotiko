# Instalación básica (e insegura) de MongoDB en Ubuntu 18.x

Para usar una base de datos en nuestra aplicacion, necesitamos disponer de la base de datos en sí. En la práctica es probable que la entidad para la que trabajemos o la empresa de servicios de Internet que contratemos nos proporcionen una base de datos, Pero durante la etapa de desarrollo del proyecto podemos instalar nuestro propio motor de base de datos local que nos permita trabajar libremente.

El motor de base de datos no se instala en el proyecto, sino que se incorpora como un servicio en nuestro ordenador. Dentro de este motor de base de datos podremos crear una base de datos para cada proyecto.

MongoDB es un motor de base de datos documental noSQL. Es muy popular en entornos JavaScript pues permite emplear bases de datos sin necesidad de entrenamientos complejos y de una forma muy flexible.

Para instalar el motor MongoDB a nuestro sistema Ubuntu 18.x:

1. Abrimos un terminal.
1. Actualizamos el catálogo de software:

    `sudo apt update`

1. Instalamos el paquete de software correspondiente:
 
    `sudo apt install mongodb`

1. A la pregunta de si queremos continuar, respondemos 's' y pulsamos intro:

    `¿Desea continuar? [S/n] s`

1. Comprobamos que el servicio está instalado en el sistema y funcionando: 

    `systemctl status mongodb`

1. Comprobamos que el servicio está escuchando a la espera de peticiones:

    `sudo ss -plnt`

1. Cerramos el terminal.

Recuerda instalar el módulo de node para mongodb en la carpeta del proyecto node:

```bash
npm install mongodb
```
