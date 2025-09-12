import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Form submitted!'); };

  const inputStyle = {
    display: 'block',
    width: '300px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#1E3A8A',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#E0F2FE' }}>
      <h1 style={{ color: '#1E3A8A' }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} style={inputStyle} />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} style={inputStyle} />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} style={inputStyle} />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
