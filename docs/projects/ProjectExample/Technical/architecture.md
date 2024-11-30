# Architecture 

## Descripción de la Arquitectura

La arquitectura del proyecto sigue un enfoque de **microservicios**, donde cada componente tiene su propio servicio independiente:

- **Frontend**: Desarrollado con **React** y desplegado en **Azure Static Web Apps**.
- **Backend**: API RESTful desarrollada con **Node.js** y **Express**.
- **Base de Datos**: **Azure MySQL** para almacenar los datos de los usuarios y las transacciones.

Los servicios se comunican a través de APIs seguras y el proyecto se despliega en la nube utilizando **Azure**.

## Diagrama de Arquitectura

![Diagrama de Arquitectura](../assets/RelacionalDiagram.png)