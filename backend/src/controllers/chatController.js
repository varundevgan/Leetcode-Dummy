import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    const token = chatClient.createToken(req.user.clerkId);
    console.log("req", req.user);
    res.status(200).json({
      token,
      userID: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.image,
    });
  } catch (error) {
    console.error(`Error in chatController: ${error.message}`);
    return res.status(500).json({ message: `Internal Server Error` });
  }
}
