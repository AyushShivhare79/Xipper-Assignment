import { Request, RequestHandler, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    res.status(200).json({ message: "Sign in successful", user });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      res.status(409).json({ message: "User already exists" });
      return;
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
