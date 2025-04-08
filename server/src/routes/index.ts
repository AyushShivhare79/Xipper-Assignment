import express from "express";
import auth from "./auth";
import hotel from "./hotel";

const router = express.Router();

router.use("/auth", auth);
router.use("/hotel", hotel);

export default router;
