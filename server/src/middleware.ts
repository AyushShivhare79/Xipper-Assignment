import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import secret from "./config";
import { User } from "./lib/generateToken";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  console.log("Token: ", token);

  if (!token) {
    res.status(403).json({ message: "Invalid request" });
    return;
  }

  try {
    const decoded = jwt.verify(token, secret) as User;
    console.log("Decoded: ", decoded);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export default authMiddleware;
