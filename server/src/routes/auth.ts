import { Request, Response, Router } from "express";
import { signIn, signUp } from "../controllers/auth";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const router = Router();

router.post("/signin", signIn);
router.post("/signup", signUp);

export default router;
