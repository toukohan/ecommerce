import { Router } from "express";
import { registerUser, loginUser, getMe } from "../controllers/authController";
import { authenticateUser } from '../middleware/authenticateUser';

const router = Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/me", authenticateUser, getMe);

export default router;