if (!process.env.JWT_SECRET) {
  throw new Error("JWT secret is not defined");
}
const secret = process.env.JWT_SECRET;

export default secret;
