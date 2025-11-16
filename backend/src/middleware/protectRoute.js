import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      const email = req.auth().emailAddresses?.[0]?.emailAddress;
      const firstName = req.auth().firstName;
      const lastName = req.auth().lastName;

      if (!clerkId)
        return res
          .status(401)
          .json({ message: "Unauthorized - invalid token" });

      // upsert user in MongoDB
      const user = await User.findOneAndUpdate(
        { clerkId },
        { email, firstName, lastName },
        { upsert: true, new: true } // creates if not exists, returns new document
      );

      // attach user to request
      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
