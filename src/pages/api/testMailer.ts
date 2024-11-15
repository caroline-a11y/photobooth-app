import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function testMailer(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { recipientEmail, subject, message } = req.body;

    // Create a transporter object using Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'malckieboothke@gmail.com', // Your Gmail address
        pass: 'hxfszyrkjcegmyyc', // Your Gmail password or app-specific password
      },
    });

    try {
      // Send email
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to: recipientEmail, // receiver's email
        subject: subject, // email subject
        text: message, // plain text message
      });

      console.log('Email sent: ', info.messageId);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
