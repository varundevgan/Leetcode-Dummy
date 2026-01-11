import express from "express";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js";
import path from "path";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  })
);
app.use("/api/inngest", serve({ client: inngest, functions }));

// app.get("/", (req, res) => {
//   res.status(400).json({
//     message: "Hello from server",
//   });
// });

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend", "dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => console.log(`http://localhost:${ENV.PORT}`));
  } catch (error) {
    console.error(`Error starting the server: ${error}`);
  }
};

startServer();
