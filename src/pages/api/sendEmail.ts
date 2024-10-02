// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, date, time, email } = req.body;

    // Create a transporter with your email provider's settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like Outlook, etc.
      auth: {
        user: 'malckieboothke@gmail.com', // Use environment variables for security
        pass: 'Owns1mplebooth!',  // Use environment variables for security
      },
    });

    try {
      // Sending the email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'malckieboothke@gmail.com', // The email where bookings should be sent
        subject: 'New Photobooth Booking',
        text: `New booking details:\n\nName: ${name}\nDate: ${date}\nTime: ${time}\nEmail: ${email}`,
        html: `<p>New booking details:</p>
               <ul>
                 <li><strong>Name:</strong> ${name}</li>
                 <li><strong>Date:</strong> ${date}</li>
                 <li><strong>Time:</strong> ${time}</li>
                 <li><strong>Email:</strong> ${email}</li>
               </ul>`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}