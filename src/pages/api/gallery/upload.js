import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  // Check if the user is authenticated and the owner
  if (!session || session.user?.email !== 'malckieboothke@gmail.com') {
    return res.status(403).json({ message: 'Forbidden: You do not have permission to upload images.' });
  }

  if (req.method === 'POST') {
    // Handle image upload logic here
    const { image } = req.body; // Add your image upload logic

    return res.status(200).json({ message: 'Image uploaded successfully!' });
  } else {
    return res.setHeader('Allow', ['POST']).status(405).end(`Method ${req.method} Not Allowed`);
  }
}
