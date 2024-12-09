---
    title: Dependencies
    description: Dependemos de... 
---

# **Dependency Documentation for Premialo**

## **Introduction**  
Premialo uses a curated selection of dependencies to ensure a secure, scalable, and user-friendly online raffle platform. This document provides an overview of the core tools and packages integrated into the project, detailing their purposes, features, and configurations.

---

## **Core Framework and Environment**

### 1. **Laravel 11**  
- **Version**: 11.x  
- **Purpose**: Forms the backbone of the application, offering a robust and efficient framework for modern web development.  
- **Key Features**:  
  - Intuitive routing system.  
  - Blade templating engine for streamlined UI development.  
  - RESTful API capabilities for seamless integration.  
  - Scalability and extensibility for enterprise applications.  

- **Configuration Notes**:  
  - Environment variables are securely managed in the `.env` file.  
  - Advanced features like queues and caching are utilized for enhanced performance.

- **Documentation**: [Laravel Documentation](https://laravel.com/docs)

### 2. **PHP 8**  
- **Version**: 8.x  
- **Purpose**: Provides the underlying language environment, supporting modern syntax and performance enhancements.  
- **Key Features**:  
  - Named arguments for improved code readability.  
  - Union types for better type safety.  
  - JIT compiler for optimized execution speed.  
  - Attributes for cleaner metadata and annotations.

- **Documentation**: [PHP Documentation](https://www.php.net/docs)

---

## **Additional Packages and Tools**

### 3. **Laravel Telescope**  
- **Version**: Compatible with Laravel 11.  
- **Purpose**: Offers monitoring and debugging tools for Laravel applications.  
- **Key Features**:  
  - Tracks requests, queries, exceptions, and logs in real-time.  
  - Monitors queue jobs and scheduled tasks.  

- **Configuration Notes**:  
  - Enabled in development and staging environments.  
  - Configured via `config/telescope.php`.

- **Documentation**: [Telescope Documentation](https://laravel.com/docs/telescope)

### 4. **Laravel Socialite**  
- **Version**: Compatible with Laravel 11.  
- **Purpose**: Simplifies OAuth authentication for seamless third-party platform integrations.  
- **Key Features**:  
  - Supports major social networks like Google, Facebook, and Twitter.  
  - Unified interface for consistent authentication flow.  

- **Configuration Notes**:  
  - OAuth credentials (`client_id`, `client_secret`, etc.) are stored in `.env`.  
  - Routes are defined to handle OAuth redirects and callbacks.

- **Documentation**: [Socialite Documentation](https://laravel.com/docs/socialite)

### 5. **Spatie Permissions**  
- **Version**: Compatible with Laravel 11.  
- **Purpose**: Implements role-based access control (RBAC).  
- **Key Features**:  
  - Easy assignment and management of roles and permissions.  
  - Middleware for guarding routes and functionality.  
  - Database-driven role and permission storage.  

- **Configuration Notes**:  
  - Publish configuration files using:  
    ```bash
    php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
    ```  
  - Database migrations are required to create the necessary tables.

- **Documentation**: [Spatie Permissions Documentation](https://spatie.be/docs/laravel-permission)

---

## **Development and Testing Tools**

### 6. **PHPUnit**  
- **Purpose**: Enables automated testing for application reliability.  
- **Configuration Notes**:  
  - Test cases are stored in the `tests/` directory.  
  - A separate `.env.testing` file is used for test-specific configurations.

- **Documentation**: [PHPUnit Documentation](https://phpunit.de/documentation.html)

### 7. **Laravel Debugbar** (Optional)  
- **Purpose**: Provides detailed debug information during development.  
- **Configuration Notes**:  
  - Activated only in local development environments to avoid performance overhead.

- **Documentation**: [Debugbar Documentation](https://github.com/barryvdh/laravel-debugbar)

---

## **Installation and Management**

### 1. **Installing Dependencies**  
Run the following command to install all necessary dependencies:  
```bash
composer install
```