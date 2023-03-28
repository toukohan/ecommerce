import { Request, Response } from 'express';
import db from '../db';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await db.query("SELECT * FROM users");
        res.json(response.rows);
    }
    catch (err) {
        console.error(err);
        res.json({ message: "Server error" });
    }
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const response = await db.query("SELECT * FROM users WHERE id = $1", [id]);
        res.json(response.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.json({ message: "Server error" });
    }
}

export const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const response = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, password]
        );
        res.json(response.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.json({ message: "Server error" });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { email, password } = req.body;
    try {
        const response = await db.query(
            "UPDATE users SET email = $1, password = $2 WHERE id = $3 RETURNING *",
            [email, password, id]
        );
        res.json(response.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.json({ message: "Server error" });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const response = await db.query("DELETE FROM users WHERE id = $1", [id]);
        res.json({ message: "User deleted" });
    }
    catch (err) {
        console.error(err);
        res.json({ message: "Server error" });
    }
};

