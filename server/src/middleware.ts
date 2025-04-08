import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import secret from "./config";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware");
  const token = req.cookies.token;

  if (!token) {
    res.status(403).json({});
    return;
  }
  try {
    const decoded = jwt.verify(token, secret);
    // req.userId = decoded.id;
    console.log("Decoded: ", decoded);
    next();
  } catch (err) {
    res.status(403).json({});
    return;
  }
};

export default authMiddleware;
