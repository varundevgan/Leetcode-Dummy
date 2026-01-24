import express from "express";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import { connectDB } from "./lib/db.js";
import { protectRoute } from "./middleware/protectRoute.js";
// import path from "path";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  })
);
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use(clerkMiddleware()); // this will add auth object to the req i.e req.auth

// <----------------------------------Middleware ends---------------------------------->

app.get("/", (req, res) => {
  res.status(400).json({
    message: "Hello from server",
  });
});

app.get("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

//  Here protectRoute is an array, so express implicity flatten the array and call all inside function w.r.t order
app.get("/video-calls", protectRoute, (req, res) => {
  res.status(200).json({
    message: "This is video call endpoint",
  });
});

// const __dirname = path.resolve();

// if (ENV.NODE_ENV === "development") {
//   app.use(express.static(path.join(__dirname, "../frontend", "dist")));
//   app.get("/{*any}", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => console.log(`http://localhost:${ENV.PORT}`));
  } catch (error) {
    console.error(`Error starting the server: ${error}`);
  }
};

startServer();
