# Dependencias del Proyecto

## Requisitos de Software

- **Node.js** v21.x o superior
- **npm**  para la gestión de dependencias

## Dependencias del Proyecto
- composer
- laravel 8+
- node.js
- nvm 

## Installation Guide

This project is built with PHP and Laravel. Follow these steps to set up the project:

### Prerequisites
- **PHP**: Version 8.0 or higher
- **Composer**: Dependency manager for PHP
- **MySQL**: Database setup

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/la-rifa-mas-montanera.git
   cd la-rifa-mas-montanera
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

 5. **Install npm:**
 ´´´bash
   npm i
 ´´´

 6. **Run npm:**
 ´´´bash
   npm run dev
 ´´´

 7. **Generate an application key:**:

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

8. **Run the database migrations:**:
```bash
php artisan migrate
```


9. **Start the development server:**:
```bash
php artisan serve
```

10. **Access the application: Open your browser and go to http://127.0.0.1:8000.**
