import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests for uploading images
  if (req.method === "POST") {
    const session = await getSession({ req });

    // Check if the user is authenticated and is the owner
    if (!session || session.user?.email !== "malckieboothke@gmail.com") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Proceed with your image upload logic here
    // For example, handling image upload to a database or storage

    return res.status(200).json({ message: "Image uploaded successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
