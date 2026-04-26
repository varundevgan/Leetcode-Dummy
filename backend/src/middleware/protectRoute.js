import { getAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const { userId: clerkId } = getAuth(req);

    if (!clerkId) {
      return res.status(401).json({
        message: "Unauthorized - no session",
      });
    }

    const user = await User.findOne({ clerkId });

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized - User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
