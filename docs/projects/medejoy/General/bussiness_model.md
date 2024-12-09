##  General Description
The project consists of the development of a web platform that allows the sale of tickets to participate in raffles organized by users. The raffles will be linked to the drawings of the Medellin Lottery, and each ticket purchased corresponds to a random number that gives the user the opportunity to win.

### Types of users on the platform:
- **Administrator** 👑: Manages the platform, users, and raffles.
- **Organizer** 🌟: Creates raffles, buys ballots, and manages their raffles.
- **Customer** 👤: Buys tickets for active raffles and participates in them.
- **Guests** 👥: Explore the platform but must register to participate.

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