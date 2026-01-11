import { Inngest } from "inngest";
import User from "../models/User.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "Leetcode-dummy" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, email_addresses, last_name, image_url } =
      event.data;

    const user = {
      clerkId: id,
      name: `${first_name || ""} ${last_name || ""}`,
      email: email_addresses[0]?.email_address,
      profileImage: image_url,
    };

    await User.create(user);

    await upsertStreamUser({
      id: user.clerkId.toString(),
      name: user.name,
      image: user.profileImage,
    });
  }
);

const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });

    await deleteStreamUser(id.toString());
  }
);

// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser, deleteUserFromDB];
