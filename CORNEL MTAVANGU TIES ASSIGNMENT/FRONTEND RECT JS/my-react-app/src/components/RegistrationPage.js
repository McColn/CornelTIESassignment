import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful, you can navigate to a success page or handle it accordingly
        console.log('Registration successful');
        navigate('/home');
      } else {
        // Handle registration failure (display error message or take other actions)
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h4>Registration Page</h4>

      <FloatingLabel controlId="floatingInput" label="First name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="First name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Last name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Last name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </FloatingLabel>

      <p>
        Do you already registered <Link to='/'>Sign in now</Link>{' '}
      </p>

      <Button variant="primary" type="button" onClick={handleRegister}>
        Register
      </Button>
    </div>
  );
}

export default RegistrationPage;
