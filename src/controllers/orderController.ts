import db from '../db';
import { Request, Response } from 'express';

export const getOrders = async (req: Request, res: Response) => {
    try {
        const response = await db.query('SELECT * FROM orders');
        res.json(response.rows);
    } catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
};

export const createOrder = async (req: Request, res: Response) => {
    const { user_id, product_id, quantity } = req.body;
    try {
        const response = await db.query(
            "INSERT INTO orders (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *",
            [user_id, product_id, quantity]
        );
        res.json(response.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
};

export const getOrder = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const response = await db.query(
            "SELECT * FROM orders WHERE id = $1",
            [id]
        );
        res.json(response.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
};

export const updateOrder = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { user_id, product_id, quantity } = req.body;
    try {
        const response = await db.query(
            "UPDATE orders SET user_id = $1, product_id = $2, quantity = $3 WHERE id = $4 RETURNING *",
            [user_id, product_id, quantity, id]
        );
        res.json(response.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const response = await db.query(
            "DELETE FROM orders WHERE id = $1",
            [id]
        );
        res.json({ message: "Order deleted" });
    } catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
};

