import jwt from "jsonwebtoken";

interface User {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const generateToken = (payload: User) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT secret is not defined");
  }
  
  const token = jwt.sign(payload, secret, { expiresIn: "1h" });

  return token;
};

export default generateToken;
