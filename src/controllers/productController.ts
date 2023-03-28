import db from '../db';
import { Request, Response } from 'express';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const response = await db.query('SELECT * FROM products');
        res.json(response.rows);
    } catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
}

export const createProduct = async (req: Request, res: Response) => {
    const { name, price, description, category_id, sub_category_id } = req.body;
    try {
        const response = await db.query(
            "INSERT INTO products (name, price, description, category_id, sub_category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, price, description, category_id, sub_category_id]
        );
        res.json(response.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const response = await db.query(
            "SELECT * FROM products WHERE id = $1",
            [id]
        );
        res.json(response.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, description, category_id, sub_category_id } = req.body;
    try {
        const response = await db.query(
            "UPDATE products SET name = $1, price = $2, description = $3, category_id = $4, sub_category_id = $5 WHERE id = $6 RETURNING *",
            [name, price, description, category_id, sub_category_id, id]
        );
        res.json(response.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const response = await db.query(
            "DELETE FROM products WHERE id = $1",
            [id]
        );
        res.json({ message: "Product deleted" });
    } catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
}
