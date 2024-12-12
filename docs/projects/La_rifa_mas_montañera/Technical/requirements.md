# Project Requirements

## Functional Requirements

### User Registration:
- Users must be able to register with the system by providing a valid email address and a secure password.
- The system must send a confirmation email to the user to verify the email address.
- The registration process must allow users to create an account with a unique username.

### Ticket Purchase:
- Users must be able to purchase tickets to participate in raffles.
- The system must allow the purchase of tickets using different payment methods (e.g. MercadoPago, PSE).
- Users must see a summary of their purchase before completing the transaction.
- The system must allow the purchase of tickets in different price ranges, depending on the value of the raffle.

### Winner Notifications:
- Users should receive a notification when they are selected as a raffle winner.
- Notifications can be sent by e-mail, and should contain information about the prize won and instructions on how to claim it.
- The system must allow platform administrators to manage and send these notifications.

### Raffle Management:
- Administrators must be able to create new raffles, specifying prizes, start date, and end date.
- Administrators should have the ability to view all active raffles and manage them, including the option to close a raffle and select a winner.
- The system should allow raffles to be public or private, depending on the configuration set by administrators.

### Purchase and Participation History:
- Users should be able to access a complete history of their ticket purchases and the raffles in which they have participated.
- The system should show the status of the raffles in which the user is participating (in progress, closed, winner, etc.).

### Payment Verification:
- The system must verify payment of the raffles before allowing participation in the drawing.
- Payments must be confirmed by the payment gateway before tickets are assigned to users.



# Non-functional Requirements

### Scalability:
- The system must be able to support progressive growth in the number of users, being able to handle a minimum of 10,000 concurrent users without affecting performance. This implies that the infrastructure must be designed to allow for efficient system expansion (horizontal scaling) as users or transactions increase.
- An architecture must be implemented that allows scaling resources (such as databases, servers, and storage) without major changes in code or configuration, using cloud services or container solutions such as Kubernetes.

### High Availability (99.9%):
- The system must be continuously available, ensuring minimal downtime. This implies that the system must be able to recover quickly from hardware or software failures.
- Redundancy strategies (e.g., duplicate servers, load balancing, regular backups) should be employed to prevent any failure in one part of the system from affecting the overall operation of the platform.

### Security:
- The system must ensure the security of user and payment information.
- User passwords should be encrypted using secure hashing algorithms to prevent data from being vulnerable to leakage or unauthorized access.
- Payments should be processed securely through trusted payment gateways such as MercadoPago or PSE, ensuring compliance with online security regulations (such as PCI DSS) to protect sensitive credit card information.

### Performance:
- The system must provide optimal performance, especially for ticket purchase transactions. The response time for processing each purchase should be less than 2 seconds. This implies that critical operations, such as payment and ticket validation, must be optimized and not generate bottlenecks.
- The system must handle large volumes of data without loss of performance, especially when processing large numbers of users participating in raffles at the same time.

### Compatibility:
- The platform must be accessible through the main web browsers (Chrome, Firefox, Safari, Edge) and must work properly on different devices (desktop, tablet, and mobile).
- The user interface design must be responsive, automatically adapting to the screen size of the device. This will allow users to access the platform conveniently, regardless of the device they are using.

### Usability:
- The platform should be easy to use for users of different experience levels. The interaction flow should be clear, allowing users to register, purchase tickets, and check results in a simple and intuitive way.
- A clean interface should be provided, with clear instructions on how to participate in the raffles, how to buy tickets, and how to verify winners. In addition, the platform must be accessible for people with disabilities, ensuring compatibility with assistive tools such as screen readers.

### Maintainability:
- The application code should follow good software development practices, with a modular and easily extensible structure. This ensures that the platform is easy to maintain and upgrade in the future.
- Adequate test coverage (unit, integration) should be in place to ensure that the system remains functional during upgrades and changes.

### Legal Compliance and Privacy:
- The system must comply with local personal data protection laws, such as the Personal Data Protection Law in Colombia or GDPR in Europe, ensuring that user data is handled lawfully, securely, and with their explicit consent.
- Users should be provided with the option to manage their privacy preferences, such as updating or deleting their personal information. In addition, the system should provide mechanisms for users to request deletion of their account and all related data.

### Documentation and Support:
- The system should have clear and detailed documentation for platform administrators and users. This includes user guides, terms and conditions, and answers to frequently asked questions.
- In addition, user support should be offered through various channels, such as email, live chat, or a ticketing system, to resolve any doubts or inconveniences related to the use of the platform.