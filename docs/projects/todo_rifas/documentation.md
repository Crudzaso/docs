# TodoRifas: ¡La suerte en tus manos! 🍀

Welcome to the documentation for **TodoRifas**. A web application that is meant for raffles management where the clients will be able to buy raffle tickets but also where the results and winners will be based off Colombian local lotteries 


## 📚 Table of Contents

1. [Introduction](#introduction)
2. [Key features](#key-features)
3. [Technologies used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Usage](#usage)
6. [Configuration](#configuration)
7. [Development](#development)
8. [Testing](#testing)
9. [FAQ](#faq)
10. [License](#license)

---

## 📖 Introduction

- Purpose: Is to develop a raffle application that brings the user a simple, secure and transparent participation experience. the platform will look out to promote confidence in between the users trough a hardy validation system and an effective raffle management. Also, the application will be designed out of the box. for the interactivity of the app to be easy in between the general users and the administrators, Assuring an appropiate management off of all transactions and related activities.

- Scope: The raffle application will be designed to enable safe and easy participation of legal-age users in organized raffles. The system will include features such as identity validation, raffle management, number selection, and payment processing through Nequi and PSE. Users will be able to view available raffles, participate in them, and receive notifications about their status. Organizers and Administrators will have the capability to create new raffles, manage participant information, and access the status and results of each raffle, ensuring transparency and efficiency in platform management. The application complies with applicable local regulations concerning raffles and gambling activities.

## 🔑 Key features

### For general users

#### 1. View Available Raffles
Users will be able to see a list of all active raffles, including details such as:
- Raffle name.
- Draw date.
- Participation value.
- Brief description of the prize.

#### 2. Participate in Raffles
Users can select available numbers to participate in raffles of their interest, either by choosing a number manually or using the random selection option. 
- Once payment is made, the system will assign a number to the participation.

#### 3. Raffle Status
Users will be able to view the status of each raffle they are participating in:
- **Numbers Purchased**: A list of numbers the user has purchased in each raffle.
- **Draw Date**: Information about when the draw will take place.
- **Draw Results**: Display of winning numbers and the raffle status (whether it is closed or ongoing).

#### 4. Notifications
Users will receive notifications regarding the status of their raffles:
- Raffle draw day reminders.
- Participation confirmation.

### For organizer users

#### 1. All general users features
All organizers will have the same general user permissions because although they will be posting their own raffles they still can buy tickets and participate on other people's raffles

#### 2. Raffle creation and edition
Organizers will be able to create and edit their own raffles based off the results of Colombian local lotteries:
- **Raffle creation:** when creating the raffle they will be able to choose if the prize will be money or something else. How much is it gonna cost for each ticket, how many numbers will be sold and under wich lottery the results will be based off from as well as the date the date the draw will take place.

- **Raffle edition:** after the raffle is created the organizers will be able to edit only the name and the image of the raffle as well as the description. the price, the prize, the draw date and the lottery it will be based off from is going to be absolute after the raffle is created.

#### 3. Raffle metrics
Organizers will have acess to a dashboard for each raffle they are promoting to see the metrics of each raffle being able to see useful documentation about it:

- **Metrics:** the metrics will be in real time. Showing graphics based off the total ammount of tickets and the ones sold so far. it will also include the total revenue and, in the case the prize is cash the remaining ammount of tickets to be sold in order to cover the prize.



## 💻 Technologies used
#### Laravel 🛠️
PHP framework for the backend.
#### PHP 🧑‍💻
Main programming language.
#### MySQL 🗄️
Relational database.
#### PSE 💳
Payment system.
#### Oauth Google 🔐
Authentication
#### Discord 📫
Notifications 


## 🚀 Getting Started

Here you'll find the necessary information in order to launch the project

#### **Prerequisites**: 
- **PHP** Version 7.4 or higher
- **Composer** Dependency manager for PHP
- **MySQL** or compatible database
- **Node.js** and npm (for frontend assets)

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/project-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd project-name
   ```

3. Install dependencies:
   ```bash
   composer install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

5. Generate application key:
   ```bash
   php artisan key:generate
   ```

6. Run database migrations:
   ```bash
   php artisan migrate
   ```

7. Install frontend dependencies:
   ```bash
   npm install
   ```

8. Run the development server:
   ```bash
   php artisan serve
   ```


## 📝 Usage

After installation, use the following commands to run the application:

### Example

- To start the Laravel server:
  ```bash
  php artisan serve
  ```

- To build for production:
  ```bash
  npm run build
  ```

## ⚙️ Configuration

Set up the necessary configuration in your `.env` file, especially for OAuth:

### Example

1. Open the `.env` file:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   
   GOOGLE_OAUTH_ID=your_google_oauth_id
   GOOGLE_OAUTH_KEY=your_google_oauth_key
   GOOGLE_REDIRECT_URI=https://your_domain/google-callback

   DISCORD_WEBHOOK_URL=your_discord_webhook_url
   ```

2. Modify the values to match your environment.

---

## 👨‍💻 Development

For developing the **TodoRifas** project:

1. Ensure all dependencies are installed:
   ```bash
   composer install
   npm install
   ```

2. Run the project:
   ```bash
   php artisan serve
   ```


## ✅ Testing

To run tests for the project:

### Example

1. Run unit tests using PHPUnit:
   ```bash
   php artisan test
   ```

2. Run specific tests:
   ```bash
   php artisan test --filter TestName
   ```



## ❓ **FAQ**

- **Q**: "I'm getting an error when running `composer install`. What should I do?"
  - **A**: Ensure that Composer is installed and your PHP version meets the requirements.

---

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.