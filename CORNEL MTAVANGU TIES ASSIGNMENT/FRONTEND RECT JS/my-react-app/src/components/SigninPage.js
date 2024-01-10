import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

function SigninPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // If login is successful, navigate to home page
        navigate('/home');
      } else {
        // Handle login failure (display error message or take other actions)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h4>Signin Page</h4>
      <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FloatingLabel>
      <p>Note have an Account? <Link to='/register'>Register now </Link></p>
      <Button variant="primary" type="button" onClick={handleSignIn}>
        Signin
      </Button>

    </div>
  );
}

export default SigninPage;
