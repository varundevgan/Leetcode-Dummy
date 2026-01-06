import express from "express";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(400).json({
    message: "Hello from server",
  });
});

app.listen(ENV.PORT, () => {
  console.log(`http://localhost:${ENV.PORT}`);
});
