DROP TABLE IF EXISTS orders_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS roles;

-- Roles Table
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Users Table: Many-to-One with roles
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) REFERENCES roles(name) DEFAULT 'USER'
);

-- Categories Table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

-- Items Table: Many-to-One with categories
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INTEGER REFERENCES categories(id)
);

-- Orders Table: Many-to-One with users
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER REFERENCES users(id)
);

-- OrderItems Junction Table: Many-to-Many of orders and items
CREATE TABLE orders_items (
    order_id INTEGER REFERENCES orders(id),
    item_id INTEGER REFERENCES items(id),
    quantity INTEGER NOT NULL,
    PRIMARY KEY (order_id, item_id)
);

-- Reservations Table: Many-to-One with users
CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    party_size INTEGER NOT NULL,
    status VARCHAR(50) NOT NULL,
    user_id INTEGER REFERENCES users(id)
);
