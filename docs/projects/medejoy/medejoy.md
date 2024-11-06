---
title: "Platform for Online Raffle Ticket Sales"
logo: "![Dream it, Raffle it, Win it!](https://github.com/user-attachments/assets/1cfbd429-8396-4f9b-972b-6d770734df34)"
slogan: "Dream it, Raffle it, Win it!"
color_palette: "![image](https://github.com/user-attachments/assets/65b30aa6-74d6-40a2-ba8d-5be0be2cf715)"
---

# Platform for Online Raffle Ticket Sales

## 1. General Description
The project consists of the development of a web platform that allows the sale of tickets to participate in raffles organized by users. The raffles will be linked to the drawings of the Medellin Lottery, and each ticket purchased corresponds to a random number that gives the user the opportunity to win.

### Types of users on the platform:
- **Administrator** 👑: Manages the platform, users, and raffles.
- **Organizer** 🌟: Creates raffles, buys ballots, and manages their raffles.
- **Customer** 👤: Buys tickets for active raffles and participates in them.
- **Guests** 👥: Explore the platform but must register to participate.

## 2. Project Objective
To offer a secure and simple platform that allows:
- **Organizers** to *create customized raffles*.
- **Customers** to *purchase tickets* and participate in raffles.
- **Administrators** to *supervise* raffles and manage users.

## 3. Main Functionalities

### 3.1. Functionalities per Role

- **Administrator** 👑
  - Manage raffles (activate, deactivate, delete).
  - Manage users (suspend accounts, change roles).
  - View sales reports 📊.
  - Monitor active and completed raffles.

- **Organizer** 🌟
  - Create raffles with:
    - Name, description, price per ballot.
    - Maximum number of ballots and deadline.
  - View participation statistics 📈.
  - Purchase ballots as a customer.

- **Customer** 👤
  - View available raffles.
  - Buy tickets for active raffles.
  - View purchase history.

- **Guest** 👥
  - Browse active raffles and general statistics.
  - Register to participate.

## 4. Process Flow

### 4.1. Raffle Creation Flow
1. Organizer logs in.
2. Accesses the dashboard.
3. Creates a raffle with the required data.
4. The raffle is visible to users.
5. The organizer monitors sales.

### 4.2. Ticket Purchase Flow
1. Customer selects a raffle.
2. Selects the number of ballots.
3. Random numbers are generated per ticket.
4. Makes the payment 💳.
5. The ticket is linked to the user.

### 4.3. Administrator Management Flow
1. Administrator logs in.
2. Accesses the management panel.
3. Manages raffles and users.

### 4.4. Registration and Access
1. Guest explores the platform.
2. Guest registers to buy tickets.
3. Accesses the corresponding dashboard.

## 5. Database Structure

- **users** 👤
  - `id`, `name`, `email`, `password`, `role`, `created_at`, `updated_at`

- **raffles** 🎟️
  - `id`, `name`, `description`, `ballot_price`, `ballot_quantity`, `organizer_id`, `deadline_date`

- **ballots** 🛒
  - `id`, `raffle_id`, `user_id`, `ballot_number`, `created_at`

- **purchases** 💳
  - `id`, `ballot_id`, `user_id`, `created_at`

## 6. Technical Requirements
- **Backend**: Laravel
- **Authentication**: Jetstream with roles and permissions
- **Frontend**: Blade + TailwindCSS
- **Database**: MySQL
- **Payments**: Integration with gateways (PayU/Stripe).

## 7. Security and Validations
- **Secure authentication** with Fortify and optional 2FA.
- **Access control** with Gates or Policies.
- **Form validation**.
- **Secure payments** through gateways.

## 8. UI/UX
- **Home screen**: Active raffles and registration/login buttons.
- **Dashboard**:
  - **Customer**: Purchase history.
  - **Organizer**: Raffles and statistics.
  - **Administrator**: Full management.
- **Ballot purchase**: Simple and secure process.

## 9. Use Cases
1. An organizer creates a raffle with 100 ballots, and all are sold.
2. An administrator deactivates a raffle for violating policies.
3. A customer participates in several raffles.
4. An unregistered user registers and buys tickets.

## 10. Conclusion
This project aims to develop a robust and secure platform for online raffles, allowing organizers to manage raffles and users to participate easily. Oversight by administrators ensures transparency and proper system operation.
