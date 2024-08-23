-- Insert Roles
INSERT INTO roles (name) VALUES ('CUSTOMER');
INSERT INTO roles (name) VALUES ('STAFF');
INSERT INTO roles (name) VALUES ('ADMIN');

-- Insert Users
INSERT INTO users (username, password, role) VALUES ('john', '123', 'CUSTOMER');
INSERT INTO users (username, password, role) VALUES ('bo', '123', 'STAFF');
INSERT INTO users (username, password, role) VALUES ('admin', '123', 'ADMIN');
INSERT INTO users (username, password, role) VALUES ('kevin', '123', 'CUSTOMER');
INSERT INTO users (username, password, role) VALUES ('david', '123', 'CUSTOMER');

-- Insert Categories
INSERT INTO categories (name) VALUES ('Appetizers');
INSERT INTO categories (name) VALUES ('Main Courses');
INSERT INTO categories (name) VALUES ('Desserts');
INSERT INTO categories (name) VALUES ('Beverages');

-- Insert Menu Items
INSERT INTO menu_items (name, price, category_id) VALUES ('Spring Rolls', 5.99, 1);
INSERT INTO menu_items (name, price, category_id) VALUES ('Bruschetta', 6.99, 1);
INSERT INTO menu_items (name, price, category_id) VALUES ('Stuffed Mushrooms', 7.49, 1);
INSERT INTO menu_items (name, price, category_id) VALUES ('Grilled Chicken', 12.99, 2);
INSERT INTO menu_items (name, price, category_id) VALUES ('Beef Stroganoff', 14.99, 2);
INSERT INTO menu_items (name, price, category_id) VALUES ('Vegetarian Lasagna', 13.49, 2);
INSERT INTO menu_items (name, price, category_id) VALUES ('Cheesecake', 6.99, 3);
INSERT INTO menu_items (name, price, category_id) VALUES ('Chocolate Lava Cake', 7.49, 3);
INSERT INTO menu_items (name, price, category_id) VALUES ('Iced Tea', 2.99, 4);
INSERT INTO menu_items (name, price, category_id) VALUES ('Soda', 1.99, 4);

-- Insert Orders
INSERT INTO orders (user_id, status) VALUES (1, 'Pending');
INSERT INTO orders (user_id, status) VALUES (1, 'Completed');
INSERT INTO orders (user_id, status) VALUES (4, 'Pending');
INSERT INTO orders (user_id, status) VALUES (5, 'Completed');

-- Insert OrderItems
INSERT INTO orders_items (order_id, menu_item_id, quantity) VALUES (1, 1, 2); -- 2 Spring Rolls
INSERT INTO orders_items (order_id, menu_item_id, quantity) VALUES (1, 2, 1); -- 1 Bruschetta
INSERT INTO orders_items (order_id, menu_item_id, quantity) VALUES (1, 4, 1); -- 1 Grilled Chicken
INSERT INTO orders_items (order_id, menu_item_id, quantity) VALUES (2, 6, 1); -- 1 Vegetarian Lasagna
INSERT INTO orders_items (order_id, menu_item_id, quantity) VALUES (2, 9, 2); -- 2 Iced Teas
INSERT INTO orders_items (order_id, menu_item_id, quantity) VALUES (3, 3, 3); -- 3 Stuffed Mushrooms (New User Order)
INSERT INTO orders_items (order_id, menu_item_id, quantity) VALUES (3, 7, 2); -- 2 Cheesecakes (New User Order)
INSERT INTO orders_items (order_id, menu_item_id, quantity) VALUES (4, 5, 1); -- 1 Beef Stroganoff (New User Order)
INSERT INTO orders_items (order_id, menu_item_id, quantity) VALUES (4, 8, 1); -- 1 Chocolate Lava Cake (New User Order)

-- Insert Reservations
INSERT INTO reservations (user_id, date, time, party_size, status) VALUES (1, '2024-08-25', '19:00', 4, 'Confirmed');
INSERT INTO reservations (user_id, date, time, party_size, status) VALUES (1, '2024-08-26', '20:00', 2, 'Pending');
INSERT INTO reservations (user_id, date, time, party_size, status) VALUES (4, '2024-08-27', '18:00', 3, 'Confirmed');
INSERT INTO reservations (user_id, date, time, party_size, status) VALUES (5, '2024-08-28', '21:00', 2, 'Pending');