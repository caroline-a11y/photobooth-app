// src/components/BookingForm.tsx
import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Booking successful!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          date: '',
          time: '',
        });
      } else {
        setMessage('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bookings-background bg-black text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4" style={{ color: '#FFD700' }}>Bookings</h1>
        <p className="mb-6" style={{ color: '#FFD700' }}>Book your photobooth experience with us.</p>
        <form onSubmit={handleSubmit} className="space-y-4 bookings-form">
          <div>
            <label htmlFor="name" className="block mb-2" style={{ color: '#FFD700' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
              style={{ backgroundColor: '#333', color: '#FFD700' }} // Background color for input
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2" style={{ color: '#FFD700' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
              style={{ backgroundColor: '#333', color: '#FFD700' }} // Background color for input
            />
          </div>

          <div>
            <label htmlFor="date" className="block mb-2" style={{ color: '#FFD700' }}>Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
              style={{ backgroundColor: '#333', color: '#FFD700' }} // Background color for input
            />
          </div>

          <div>
            <label htmlFor="time" className="block mb-2" style={{ color: '#FFD700' }}>Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
              style={{ backgroundColor: '#333', color: '#FFD700' }} // Background color for input
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600"
          >
            Confirm Booking
          </button>
        </form>
        {message && <p className="mt-4" style={{ color: '#FFD700' }}>{message}</p>}
      </div>
    </div>
  );
};

export default BookingForm;
