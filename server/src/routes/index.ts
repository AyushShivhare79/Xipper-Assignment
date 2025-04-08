import express from "express";
import auth from "./auth";
import hotel from "./hotel";
import authMiddleware from "../middleware";
import me from "./me"
const router = express.Router();

router.use("/auth", auth);
router.use("/hotel", authMiddleware, hotel);

export default router;
