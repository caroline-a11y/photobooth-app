// src/pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set up nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      auth: {
        user: process.env.EMAIL_USER || "malckieboothke@gmail.com",
        pass: process.env.EMAIL_PASS || "hxfszyrkjcegmyyc"
      },
      tls: {
        rejectUnauthorized: false, // Disable certificate validation
      },

      debug: true, // Enable debugging output for nodemailer
      logger: true, // Log to console
    });

    try {
      // Send email to the owner
      await transporter.sendMail({
        from: email || "malckieboothke@gmail.com", // sender's email
        to: process.env.EMAIL_FROM || "malckieboothke@gmail.com", // owner's email
        subject: `New Contact Form Submission from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      // Respond with a success message
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
