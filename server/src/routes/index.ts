import express from "express";
import auth from "./auth";
import hotel from "./hotel";
import authMiddleware from "../middleware";

const router = express.Router();

router.use("/auth", auth);
router.use("/hotel", authMiddleware, hotel);

export default router;
