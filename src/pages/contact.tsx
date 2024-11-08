// src/pages/contact.tsx

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-container" style={{ backgroundColor: 'black', color: '#FFD700', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#FFD700' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', color: '#FFD700' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0', backgroundColor: '#333', color: '#FFD700', border: '1px solid #FFD700' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0', backgroundColor: '#333', color: '#FFD700', border: '1px solid #FFD700' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0', backgroundColor: '#333', color: '#FFD700', border: '1px solid #FFD700', minHeight: '100px' }}
          />
        </label>
        <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#FFD700', color: 'black', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
      {status && <p style={{ textAlign: 'center', marginTop: '1rem', color: '#FFD700' }}>{status}</p>}
    </div>
  );
}
