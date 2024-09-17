import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Bookings: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: ''
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Bookings</h1>
        <p className="mb-6">Book your photobooth experience with us.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Confirm Booking
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;
