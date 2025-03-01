import express from "express";
import { getProfile, setProfile } from "../controller/profileController.js";
import { authenticateToken } from "../controller/authenticateToken.js";
const router = express.Router();
router.post("/profile", authenticateToken, setProfile);
router.get("/profile", getProfile);

export default router;
