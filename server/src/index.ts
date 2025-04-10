import express from "express";
import cors from "cors";
import routes from "./routes/index";
import cookieParser from "cookie-parser";
import authMiddleware from "./middleware";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Authorized",
  });
  return;
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
