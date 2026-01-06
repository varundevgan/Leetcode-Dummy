import express from "express";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js";
import path from "path";

dotenv.config();

const app = express();

const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.status(400).json({
    message: "Hello from server",
  });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend", "dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(ENV.PORT, () => {
  console.log(`http://localhost:${ENV.PORT}`);
});
