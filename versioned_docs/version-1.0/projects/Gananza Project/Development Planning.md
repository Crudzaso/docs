
# 📱 Gananza Project - Development Plan

- **Title:** Software Development Workflow
- **Version:** 1.0
- **Date:** 25/10/2024
- **Authors:**
    - Alejandro Velasquez Alzate
    - Diego Andres Ramirez
    - Jafet Lozano
- **Status:** Draft
- **Classification:** Confidential
- **Distribution:** Internal Use

## 1. Introduction

### 1.1 Purpose

This document establishes the standard procedures and best practices for software development in Gananza. It defines the processes, roles, responsibilities, and deliverables required in each phase of the development cycle.

### Technology and Platform Selection

#### Backend Framework: Laravel 10.x

Laravel has been selected as the backend development framework for the following characteristics and strategic advantages:

- **Eloquent ORM:** Object-relational mapping system providing an elegant interface for database operations.
- **Integrated Authentication System:** A complete authentication framework with support for multiple guards and authorization policies.
- **Artisan CLI:** Command-line tool that accelerates development through code generation and task automation.

#### Technical Benefits

- High performance and resource optimization.
- Robust security with protection against common vulnerabilities.
- Horizontal and vertical scalability.
- Extensive ecosystem of packages and components.

#### Database

- **MySQL**

#### Version Control and Code Management

For Version Control and Code Management, we will use GitHub as our centralized platform. GitHub will allow us to collaborate efficiently, keeping a detailed record of every code change and facilitating collaboration among developers. Additionally, we will work in Visual Studio Code (VS Code) as our primary development environment.

#### Software Development Methodology

We use agile methodologies with a focus on Scrum and Azure DevOps as a management tool to maximize efficiency, encourage collaboration, and ensure incremental deliveries of high value.

#### Software Structure in Laravel with Clean Architecture

Clean Architecture is based on separating responsibilities into layers, such that dependencies flow towards the core of the application.

## 2. Functional Specifications

- Comply with gambling regulations.
- The platform will allow users to register, create raffles, buy tickets, and check results of third-party gambling games.
- Provide tools for raffle organizers to manage events.
- Each functionality must interact on the platform, covering key processes like user authentication and secure ticket purchase.

## 3. Key Features

- **Dashboard for Organizers:** Real-time statistics and marketing tools.
- **Personalized Experience for Buyers:** Automatic notifications and loyalty system.
- **Integration with RNG Providers:** Validation of results.
- **Security and Validation:** Blockchain technology for ticket verification.

## 4. Basic System Flow

1. A user accesses the raffle and selects how many tickets they want to purchase.
2. The system checks ticket availability and allows the purchase.
3. The user completes the payment through the gateway.
4. The system automatically assigns tickets and sends confirmations.

## 5. Branding Plan

- **Platform Name:** Gananza.
- **Logo:** Design of a representative logo.
- **Colors and Typography:** Selection of a vibrant color palette and readable typography.
- **Slogan:** "Fair Raffles, Real Gains."

## 6. Implementation Timeline

| Phase          | Activities                              | Estimated Duration |
|----------------|-----------------------------------------|--------------------|
| Research       | Market analysis and requirements       | 1 week             |
| Design         | Structuring and designing tables       | 3 days             |
| Development    | Programming functionalities            | 2 weeks            |
| Testing        | Functional and security testing        | 1 week             |
| Launch         | Deployment and platform promotion      | 1 week             |

## 7. Required Resources

- **Development Team:** 3 developers (backend and frontend).
    - Alejandro Velasquez Alzate: Backend and full-stack developer.
    - Diego Andres Ramirez: GitHub and full-stack developer.
    - Jafet Lozano: UI and full-stack developer.

## 8. Risk Assessment

- **Technical Risks:** Issues in integrating the RNG system.
    - **Mitigation:** Collaborate with a certified RNG provider.
- **Legal Risks:** Non-compliance with Coljuegos regulations.
    - **Mitigation:** Consult legal experts during development.
- **Financial Risks:** Exceeding the estimated budget.
    - **Mitigation:** Monitor expenses monthly and adjust as necessary.

## 9. Work Plan

### Backlog of Tasks for the MVP

1. **User Management**
    - Create database and user table with roles.
    - Create registration and login screens.
    - Implement authentication and authorization logic.
2. **Design Main Navigation Menu – Dashboard**
    - Create a simple design for the navigation menu.
    - Componentize template resources.
    - Configure navigation according to user role.
3. **Raffle Creation (Organizers)**
    - Create raffle creation form.
    - Program input validations for the form.
4. **Ticket Purchase**
    - Create ticket purchase system for selected raffle.
    - Implement automatic ticket number assignment.
5. **Raffle System (RNG)**
    - Integrate basic RNG system to select the winner.
6. **Notification and Winner Registration**
    - Program automatic notification to winners.
7. **Basic Admin Panel**
    - Create a view for active, pending, and finished raffles.

## Conclusion and Call to Action

This project will not only facilitate participation in raffles but also ensure transparency and security.