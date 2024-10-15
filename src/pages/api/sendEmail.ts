// pages/api/sendEmail.ts

// src/pages/api/sendEmail.ts


import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set up the transporter for Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP server
      port: 587, // Use 465 for SSL
      secure: false, // Set to true for port 465
      auth: {
        user: 'malckieboothke@gmail.com', // Replace with your email
        pass: 'hxfszyrkjcegmyyc', // Replace with your email password
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });
    
    const mailOptions = {
      from: email,
      to: 'malckieboothke@gmail.com', // Replace with the recipient's email
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'Email sent!' });
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      if (error instanceof Error) {
        res.status(500).json({ status: 'Error sending email', message: error.message });
      } else {
        res.status(500).json({ status: 'Error sending email' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
