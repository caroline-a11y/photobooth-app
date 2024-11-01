// src/pages/api/bookings.js
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, date, time } = req.body;

    // Validate the data
    if (!name || !email || !date || !time) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
   
    const verificationToken = await p.verificationToken.delete({
      where: {
        token: "your_verification_token_here",
      },
    });
    
    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'malckieboothke@gmail.com', // Your email address
        pass: 'hxfszyrkjcegmyyc', // Your App Password or email password
    },
    tls: {
      rejectUnauthorized: false, // Temporary measure (not recommended for production)
    },
  });


    // Email options
    const mailOptions = {
      from: email, // Use the email from the booking request
      to: 'malckieboothke@gmail.com', // Recipient address (your email)
      subject: 'New Booking Confirmation',
      text: `You have a new booking!\n\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Booking successful!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Booking successful, but email could not be sent.' });
    }
  } else {
    // Handle any other HTTP method
    return res.setHeader('Allow', ['POST']).status(405).end(`Method ${req.method} Not Allowed`);
  }
}

