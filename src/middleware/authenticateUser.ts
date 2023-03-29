import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { VerifiedRequest } from "../types";

const jwtSecret = process.env.ACCESS_TOKEN_SECRET as string;

export const authenticateUser = async (
    req: VerifiedRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        console.log("user: ", user);
        next();
    });
};