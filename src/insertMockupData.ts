import { Pool } from 'pg';
import { config } from 'dotenv';

config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ecommerce',
    password: process.env.DB_PASSWORD,
    port: 5432,
});

const insertData = async () => {
    try {
        // need users here for this to work. Gonna add manually to get the hashed password. 

        const customers = await pool.query(`
        INSERT INTO customers (user_id, first_name, last_name, phone, address, city, phone_number) 
        VALUES 
        (1, 'John', 'Doe', '555-555-1234', '123 Main St', 'New York', '555-555-4321'),
        (2, 'Jane', 'Smith', '555-555-5678', '456 Elm St', 'Los Angeles', '555-555-8765'),
        (3, 'David', 'Lee', '555-555-9012', '789 Oak St', 'Chicago', '555-555-2109');
        `);

        const categories = await pool.query(`
        INSERT INTO categories (name) VALUES
        ('Phones'),
        ('Laptops'),
        ('Desktops'),
        ('Accessories');
        `);

        const products = await pool.query(`
        INSERT INTO products (name, description, price, image, category) 
        VALUES 
        ('iPhone 13', 'The latest iPhone', 1099.99, 'https://example.com/iphone-13.jpg', 'phones'),
        ('MacBook Pro', 'Powerful laptop for professionals', 1999.99, 'https://example.com/macbook-pro.jpg', 'laptops'),
        ('Dell XPS 13', 'Thin and light laptop', 1299.99, 'https://example.com/dell-xps-13.jpg', 'laptops'),
        ('Logitech G Pro', 'Wired gaming mouse', 69.99, 'https://example.com/logitech-g-pro.jpg', 'accessories'),
        ('Bose QuietComfort 35', 'Noise-cancelling wireless headphones', 299.99, 'https://example.com/bose-quietcomfort-35.jpg', 'accessories');
        `);

        const orders = await pool.query(`
        INSERT INTO orders (customer_id, total, status) 
        VALUES 
        (1, 1099.99, 'completed'),
        (2, 2269.97, 'processing'),
        (3, 69.99, 'completed');
        `);

        const orderItems = await pool.query(`
        INSERT INTO order_items (order_id, product_id, quantity) 
        VALUES 
        (1, 1, 1),
        (2, 2, 2),
        (2, 3, 1),
        (3, 4, 1),
        (3, 5, 1);     
        `);

        const reviews = await pool.query(`
        INSERT INTO reviews (customer_id, product_id, rating, comment) 
        VALUES 
        (1, 1, 5, 'Love the new iPhone'),
        (2, 2, 4, 'Great laptop for work'),
        (3, 4, 3, 'Mouse feels a bit too light'),
        (3, 5, 5, 'Best headphones I have ever owned');
        `);

        const payments = await pool.query(`
        INSERT INTO payments (order_id, customer_id, amount, status) 
        VALUES 
        (1, 1, 1099.99, 'completed'),
        (2, 2, 2269.97, 'processing'),
        (3, 3, 69.99, 'completed');
        `);

        const subCategories = await pool.query(`
        INSERT INTO sub_categories (name, category_id) VALUES
        ('Smartphones', 1),
        ('Feature Phones', 1),
        ('Gaming Laptops', 2),
        ('Ultrabooks', 2),
        ('All-in-One Computers', 3),
        ('Gaming Accessories', 4),
        ('Laptop Accessories', 4),
        ('Smartphone Accessories', 4);
        `);

        const shipping = await pool.query(`
        INSERT INTO shipping (order_id, customer_id, address, city, phone_number, status)
        VALUES (1, 1, '123 Main St', 'New York', '555-555-4321', 'delivered'),
        (2, 2, '456 Elm St', 'Los Angeles', '555-555-8765', 'processing'),
        (3, 3, '789 Oak St', 'Chicago', '555-555-2109', 'delivered');
        `);

        console.log('Data inserted successfully');
    } catch (error) {
        console.log(error);
    }
};

insertData();

const insertSpecificData = async () => {
    try {
         

        const orders = await pool.query(`
        INSERT INTO orders (customer_id, total, status) 
        VALUES 
        (1, 1099.99, 'completed'),
        (2, 2269.97, 'processing'),
        (3, 69.99, 'completed');
        `);

        const orderItems = await pool.query(`
        INSERT INTO order_items (order_id, product_id, quantity) 
        VALUES 
        (1, 1, 1),
        (2, 2, 2),
        (2, 3, 1),
        (3, 4, 1),
        (3, 5, 1);     
        `);

        const reviews = await pool.query(`
        INSERT INTO reviews (customer_id, product_id, rating, comment) 
        VALUES 
        (1, 1, 5, 'Love the new iPhone'),
        (2, 2, 4, 'Great laptop for work'),
        (3, 4, 3, 'Mouse feels a bit too light'),
        (3, 5, 5, 'Best headphones I have ever owned');
        `);

        const payments = await pool.query(`
        INSERT INTO payments (order_id, customer_id, amount, status) 
        VALUES 
        (1, 1, 1099.99, 'completed'),
        (2, 2, 2269.97, 'processing'),
        (3, 3, 69.99, 'completed');
        `);

        const subCategories = await pool.query(`
        INSERT INTO sub_categories (name, category_id) VALUES
        ('Smartphones', 1),
        ('Feature Phones', 1),
        ('Gaming Laptops', 2),
        ('Ultrabooks', 2),
        ('All-in-One Computers', 3),
        ('Gaming Accessories', 4),
        ('Laptop Accessories', 4),
        ('Smartphone Accessories', 4);
        `);

        const shipping = await pool.query(`
        INSERT INTO shipping (order_id, customer_id, address, city, phone_number, status)
        VALUES (1, 1, '123 Main St', 'New York', '555-555-4321', 'delivered'),
        (2, 2, '456 Elm St', 'Los Angeles', '555-555-8765', 'processing'),
        (3, 3, '789 Oak St', 'Chicago', '555-555-2109', 'delivered');
        `);

        console.log('Data inserted successfully');
    } catch (error) {
        console.log(error);
    }
};

// insertSpecificData();;