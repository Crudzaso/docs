# Architecture

## Architecture Overview

The project follows a **microservices** architecture, where each component is designed as an independent service with its own responsibilities. This approach promotes scalability, flexibility, and maintainability across the system.

- **Frontend**: Developed using **React**, offering a dynamic and responsive user interface. It is hosted on **Azure Static Web Apps** to ensure fast and efficient delivery of content to users.
- **Backend**: A **RESTful API** built with **Node.js** and **Express**. The backend is responsible for handling business logic, user management, and processing raffle entries.
- **Database**: **Azure MySQL** is used to store user data, transaction records, raffle information, and other essential data for the application.

All services interact via secure, well-defined REST APIs, ensuring data consistency and security. The entire system is deployed on **Azure**, taking advantage of its cloud infrastructure for scalability and reliability.

## Architecture Diagram

The diagram below illustrates the key components of the system and how they interact with each other.

![Diagrama de Arquitectura](../assets/RelacionalDiagram.png)