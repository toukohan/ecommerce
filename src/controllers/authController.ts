import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../types';
import jwt, { Secret } from 'jsonwebtoken';
import db from '../db';
import bcrypt from 'bcryptjs';

const jwtSecret = process.env.ACCESS_TOKEN_SECRET as Secret;

export const registerUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const userExists = await db.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
            );
            if (userExists.rows.length > 0) {
                return res.json({ message: "User already exists" });
            }
            
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const response = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hashedPassword]
            );
            res.json(response.rows[0]);
        }
        catch (err) {
            console.error(err.message);
            res.json({ message: "Server error" });
        }
    };

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const response = await db.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
            );
            if (response.rows.length === 0) {
                return res.json({ message: "Invalid credentials" });
            }
            const user = response.rows[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.json({ message: "Invalid credentials" });
            }
            const payload = {
                sub: user.id,
            };
            const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
            res.json({ user, token });
        }
        catch (err) {
            console.error(err.message);
            res.json({ message: "Server error" });
        }
    }

export const getMe = async (req: AuthenticatedRequest, res: Response) => {
    if(!req.user) {
        return res.json({ message: "Not authorized" });
    }
    try {
        const response = await db.query(
            "SELECT * FROM users WHERE id = $1",
            [req.user]
            );
            res.json(response.rows[0]);
        }
        catch (err) {
            console.error(err.message);
            res.json({ message: "Server error" });
        }
    }    


