# Suerte Paisa

**Slogan:** Your chance to win, Paisa style

## Project Overview
**Suerte Paisa** is a raffle and lottery platform based in Medellín, Colombia. It offers a fair, reliable, and exciting gaming experience for participants, providing popular prizes with an authentic "Paisa" style. Our mission is to reflect the values of the region: trust, honesty, and joy, establishing Suerte Paisa as the leading raffle service in the area.

## Project Objective
Our goal is to position Suerte Paisa as the top raffle company in Medellín, standing out for its focus on Paisa culture and transparency in gaming. We aim to reach a broad audience with a platform that enables quick and convenient ticket purchases.

### KPIs

- Number of raffles created
- Volume of tickets sold
- User conversion rate
- Average raffle completion time
- User satisfaction

---

## 💻 Technical Specifications

### Tech Stack

| Component       | Technology            |
|-----------------|-----------------------|
| Backend         | PHP/Laravel           |
| Frontend        | React   
| CSS Framework   | TailwindCSS + Bootstrap          |
| Database        | MySQL                 |
| Authentication  | OAuth (Google) |
| 2FA             | Google                 |

### Integrations

- 💳 Payment Gateways
    - Nequi
- 📨 Notifications
    - Discrod
    - Email
- ☁️ Storage
    - Amazon S3

### PWA

- Installable on mobile devices
- Offline functionality (desirable)
- Responsive design

---

## Installation Guide

This project is built with PHP and Laravel. Follow these steps to set up the project:

### Prerequisites
- **PHP**: Version 7.4 or higher
- **Composer**: Dependency manager for PHP
- **MySQL**: Database setup

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/suerte-paisa.git
   cd suerte-paisa
   ```

2. **Install dependencies:**:
   ```bash
    composer install
   ```

   
3. **Copy the .env.example file to .env:**:
   ```bash
    cp .env.example .env
   ```

 4. **Generate an application key:**:
   ```bash
    php artisan key:generate
   ```

 5. **Generate an application key:**:

- Create a MySQL database.
- Open the .env file and update the following lines with your database configuration:
 
   ```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
   ```

6. **Run the database migrations:**:
```bash
php artisan migrate
```


7. **Start the development server:**:
```bash
php artisan serve
```

8. **Access the application: Open your browser and go to http://127.0.0.1:8000.**