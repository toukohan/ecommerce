import { Request, Response } from 'express';
import db from '../db';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await db.query("SELECT * FROM users");
        res.json(response.rows);
    }
    catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const response = await db.query("SELECT * FROM users WHERE id = $1", [id]);
        res.json(response.rows[0]);
    }
    catch (err) {
        console.error(err.message);
        res.json({ message: "Server error" });
    }
}