# 📱 Gananza Project - Technical Documentation

## 📋 Table of Contents

1. [Purchase Process for Guests](#purchase-process-for-guests)
2. [Pending Tasks](#pending-tasks)
3. [Technical Requirements](#technical-requirements)
4. [Roles and Permissions](#roles-and-permissions)
5. [Relational Model](#relational-model)
6. [Wireframes](#wireframes)
7. [Additional Resources](#additional-resources)

---

## 🔄 Purchase Process for Guests

### Process Description

This is the flow for an unregistered user (guest) to purchase a ticket for a raffle on the Gananza platform:

1. **Access to the Raffle**: The guest accesses the public page of the raffle.
2. **Select a Number**: The guest selects the desired number from the available options.
3. **Basic Registration Form**:
    - First and last name
    - Mobile number (for notifications)
    - Email address (for confirmations)
4. **Age Verification**: Confirmation of legal age according to regulations.
5. **Payment Method**:
    - Options: Nequi, PSE
    - Secure payment processing
6. **Confirmation and Notification**:
    - Confirmation on screen and via email/SMS of the purchase.
    - Automatic generation of the digital ticket.

---

## 📝 Pending Tasks

### Current Tasks

- **Wireframe Eraser**: Design of prototypes for the main screens of the purchase flow and raffle management.
- **Relational Model Eraser**: Design of relationships between tables for the database.
- **User Stories and Task Board**: Creation of a board with user stories and specific tasks.
- **Branding and Business Strategy**:
    - Choosing a name for the platform.
    - Development of the business model, including commission structure and payment options.
- **Competitor Research**: Analysis of similar raffle platforms.
- **Lottery APIs**: Search for lottery APIs in Antioquia for potential integrations.

---

## 📋 Technical Requirements

### Authentication and Security

- **OAuth**: Integration of OAuth with Google and Apple.
- **Two-factor Authentication (2FA)**: Two-factor authentication via SMS.
- **Audit**: User action logging using Laravel Auditing.

### Payments and Integrations

- **Payment Gateways**:
    - Integration with Nequi.
    - Integration with PSE.
- **Notifications**:
    - Sending notifications via SMS and email.
    - Notifications via WhatsApp (desirable).
- **Real-time Monitoring**:
    - Integration with Discord for alerts and activity monitoring.

### Infrastructure and Storage

- **Monolithic Architecture**.
- **File Upload**: Storage on Amazon S3.
- **CI/CD**: Configuration of continuous integration and deployment pipelines.

### Access Control and Permissions

- **Roles and Permissions**: Implementation with Spatie Laravel-Permission.
- **PWA**:
    - Desired offline functionality.
    - Accessibility on mobile devices.

### Frontend Development

- **Template Adaptation**: Use of TailwindCSS (preferred), Bootstrap, and plain CSS where necessary.
- **Componentization**: Modularization of the frontend to improve code reuse and maintainability.

---

## 👥 Roles and Permissions

| Role      | Main Permissions                                                                   |
| --------- | ----------------------------------------------------------------------------------- |
| Admin     | Full system management, real-time monitoring, user management, and reporting.      |
| Organizer | Create and manage their own raffles, access raffle statistics, purchase tickets.    |
| Client    | Purchase tickets, view available raffles, manage basic profile.                    |
| Guest     | View public raffles, purchase tickets without full registration.                   |

![Roles and Permissions](https://prod-files-secure.s3.us-west-2.amazonaws.com/19be1366-d88c-4bf2-8a8c-7b65185139e6/93cfa567-3508-4c3a-a41b-67c825c34a4c/image.png)

---

## 📊 Relational Model

Relationship diagram pending design and confirmation.

---

## 🎨 Wireframes

Wireframes are being developed in Azure DevOps for the main screens and user flows.

[Wireframes in Azure DevOps](https://dev.azure.com/riwi-complements-2024)

---

## 🌧️ Additional Resources

- [Idea Storm on Notion](https://www.notion.so/Lluvia-de-ideas-12a84226c7a480c7ae90e38dac62e33a?pvs=21)