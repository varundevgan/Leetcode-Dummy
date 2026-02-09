import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const secretKey = ENV.STREAM_API_SECRET;

if (!apiKey || !secretKey) {
  console.error("STREAM_API_KEY or STREAM_API_SECRET not found");
}

export const chatClient = StreamChat.getInstance(apiKey, secretKey);
export const streamClient = new StreamClient(apiKey, secretKey);

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log(`Stream user upserted successfully: ${userData}`);
  } catch (error) {
    console.error(`Error upserting userdata: ${error}`);
  }
};

export const deleteStreamUser = async (userId) => {
  console.log("UserId", userId);
  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted successfully");
  } catch (error) {
    console.error(`Error deleting stream user: ${error}`);
  }
};
