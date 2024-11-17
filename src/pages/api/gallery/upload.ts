// Delete or comment out the entire file handling logic
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Delete the logic or remove this API route if you don't need it
  return res.status(200).json({ message: "No upload functionality" });
}
