# Guía para el Despliegue del Proyecto

## Despliegue en Producción

Para desplegar el proyecto en producción, sigue los siguientes pasos:

1. **Preparar el entorno de producción**: Asegúrate de que todas las dependencias estén instaladas y configuradas.
2. **Subir el código al servidor**: Utiliza `Git` para subir el código al servidor de producción.
3. **Configurar Nginx**: Configura Nginx para que sirva el proyecto en el puerto adecuado y con el certificado SSL.
4. **Verificar el despliegue**: Accede a la URL de producción para asegurarte de que todo funciona correctamente.

## Despliegue con Docker

Para simplificar el proceso de despliegue, utiliza Docker para crear una imagen del proyecto y ejecutarla en un contenedor:
```bash
docker build -t mi-proyecto .
docker run -d -p 80:80 mi-proyecto