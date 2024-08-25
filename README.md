# Byte Me Bistro

### Overview

Byte Me Bistro is a full-stack restaurant web application designed to provide a seamless dining experience for customers. With Byte Me Bistro, users can view the restaurant's menu, place orders, make reservations, and manage their accounts. The application also supports different user roles, including customers, employees, and administrators, each with distinct functionalities.

### Features

#### User Roles

- Customer (USER):

  - Browse the restaurant menu with detailed descriptions and prices.
  - Place orders online and view order history.
  - Make and manage reservations.
  - Register and log in to their account.

- Employee:

  - View and manage customer orders.
  - Manage table reservations.
  - Update the availability of menu items.

- Admin:

  - Manage all user accounts, including customer and employee accounts.
  - Add, update, or remove menu items.
  - Oversee all reservations and orders.

### Technologies Used

#### Frontend

- **React**: A JavaScript library for building dynamic user interfaces. It enables efficient rendering and component-based architecture for menu browsing, orders, and reservations.

- **TypeScript**: A typed superset of JavaScript that enhances code reliability by catching errors at compile-time, improving code quality across the frontend.

- **TailwindCSS**: A utility-first CSS framework for rapidly designing responsive and modern UI components using reusable utility classes.

- **Redux**: A state management library that provides a centralized store for managing the application’s global state, ensuring consistent data flow and easier debugging.

#### Backend

- Java: The primary programming language used for developing the backend API, offering a strong and reliable foundation for enterprise-level applications.
- Spring Boot: A Java-based framework that simplifies the development of RESTful APIs with built-in tools for dependency injection, data persistence, and web services.

- Spring Security: A powerful framework within Spring for securing the application, managing authentication, and enforcing role-based access control.
- JWT Authentication: A method for implementing stateless authentication using JSON Web Tokens, ensuring secure communication between the client and server.

#### Database

- PostgreSQL: A robust, open-source relational database system that stores and manages all application data, ensuring data integrity and reliability.

#### DevOps

- Docker: A containerization platform that packages the frontend, backend, and database into consistent, isolated environments for development and deployment.

### Installation

Prerequisites: Java 17, Node.js, Git, PostgresSQL, Docker (Optional)

1. Clone the repository:

```bash
git clone https://github.com/pichborithk/byte-me-bistro.git
cd byte-me-bistro
```

2. Setup Backend:

- Create database
- Create `.env` file:

```bash
cd api
touch .env
```

- Configure Backend:

```
DB_USERNAME=your-db-username
DB_PASSWORD=your-db-password
DB_URL=jdbc:postgresql://localhost:5432/your-db-name
DB_SCHEMA=your-db-schema
SERVER_PORT=your-port-number
CLIENT_URL=your-client-url
SECRET_KEY=your-secret
TOKEN_EXPIRATION=60
```

- Start Backend:

```bash
mvn clean install
mvn spring-boot:run
```

2. Setup Frontend:

```bash
cd ../client
```

- Create `.env` file:

```bash
touch .env
```

- Configure Frontend:

```
VITE_API_URL=your-api-url
```

- Install dependencies:

```bash
npm install
```

- Start Frontend:

```bash
npm run dev
```
