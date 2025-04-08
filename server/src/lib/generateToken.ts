import jwt from "jsonwebtoken";
import secret from "../config";

interface User {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const generateToken = (payload: User) => {
  const token = jwt.sign(payload, secret, { expiresIn: "1h" });

  return token;
};

export default generateToken;
