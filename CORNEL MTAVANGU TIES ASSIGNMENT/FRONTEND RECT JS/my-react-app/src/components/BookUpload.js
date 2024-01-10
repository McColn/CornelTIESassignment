import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import NavbarPage from './NavbarPage';
import { Link, useNavigate } from 'react-router-dom';

function BookUpload() {
  const [bookData, setBookData] = useState({
    name: '',
    image: null,
    pdf: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('title', bookData.title);
      formData.append('cover_image', bookData.cover_image);
      formData.append('pdf_file', bookData.pdf_file);

      const response = await fetch('http://127.0.0.1:8000/api/book/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle successful upload, e.g., navigate to the home page
        navigate('/home');
      } else {
        console.error('Failed to upload the book');
      }
    } catch (error) {
      console.error('Error during upload:', error);
    }
  };

  return (
    <div className="container mt-5">
      <NavbarPage />
      <h4>Book Upload Page</h4>
      <FloatingLabel controlId="floatingInput" label="Title of the book" className="mb-3" name="name">
        <Form.Control type="text" placeholder="Title" name="title" onChange={handleChange} />
      </FloatingLabel>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Cover of the book</Form.Label>
        <Form.Control type="file" name="cover_image" onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Select Pdf</Form.Label>
        <Form.Control type="file" name="pdf_file" onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" onClick={handleUpload}>
        Upload
      </Button>
      <Link to="/home">
        <Button variant="light">Cancel</Button>
      </Link>
    </div>
  );
}

export default BookUpload;
