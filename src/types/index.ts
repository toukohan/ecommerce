import { Request } from 'express';

export interface User {
    id: number;
    email: string;
    password: string;
    role: string;
    created_at: Date;
    updated_at?: Date;
}

export interface AuthenticatedRequest extends Request {
    user: User;
}