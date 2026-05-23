import express from "express";
import {
  login,
  logout,
  register,
  getMe,
} from "../controllers/user.controller.js";
import { authenticate } from "../middleware/authorize.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/auth/me", authenticate, getMe);

export default router;
