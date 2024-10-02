
// pages/bookings.tsx

import React, { useState } from 'react';
import '../styles/bookings.css'; // Make sure to import the CSS

const Bookings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });
  const [message, setMessage] =useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    try{
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage('Booking confirmed and email sent');
        // Optionally, reset the form
        setFormData({
          name: '',
          email: '',
          date: '',
          time: ''
        });
      } else {
        setMessage(`Failed to send email: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="bookings-background">
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4 text-yellow-500">Bookings</h1>
        <p className="mb-6">Book your photobooth experience with us.</p>
        <form onSubmit={handleSubmit} className="space-y-4 bookings-form">
          <div>
            <label htmlFor="name" className="block mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
           </div>

          <div>
            <label htmlFor="date" className="block mb-2">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <div>
            <label htmlFor="time" className="block mb-2">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
            </div>

          <button
            type="submit"
            className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600"
          >
            Confirm Booking
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Bookings;