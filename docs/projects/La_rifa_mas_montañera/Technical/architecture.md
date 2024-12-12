# Architecture

## Architecture Description

The project follows a **monolithic** architecture, where both the frontend and backend are integrated into a single application. This approach simplifies management, especially for small to medium-sized projects, but has scalability limitations compared to microservices. The system structure is described below:

- **Backend**: Developed with **Laravel**, a robust PHP framework for building web applications. Laravel handles server-side logic, authentication, database management, and API routing.
- **Frontend**: Uses **Vue.js**, a progressive JavaScript framework for building interactive user interfaces. Vue is integrated within the Laravel ecosystem, enabling the creation of dynamic, reactive web applications.
- **Database**: **MySQL** or a relational database managed by Laravel, used to store all system information, such as users, raffles, purchased tickets, and results.

In a monolithic architecture, both the frontend and backend share a single codebase and are tightly integrated, which simplifies management but also makes the system more challenging to scale as it grows.

## Architecture Flow

1. **User interacts with the Frontend**: The Vue.js-based interface handles user interactions, such as registering, purchasing tickets, or viewing raffle results.
2. **Backend with Laravel processes requests**: The backend processes requests, accesses the database, and handles business logic.
3. **MySQL Database**: Stores all project-related data, including users, raffles, and purchased tickets.

## Architecture Diagram

![Architecture Diagram](../assets/estructura.jpg)
