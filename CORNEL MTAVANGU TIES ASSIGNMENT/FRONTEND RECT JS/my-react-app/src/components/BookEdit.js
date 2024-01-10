// Import necessary dependencies
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import NavbarPage from './NavbarPage';
import { Link } from 'react-router-dom';

function BookEdit() {
  return (
    <div className="container mt-5">
        <NavbarPage />
      <h4>Book Update Form</h4>
      <FloatingLabel
        controlId="floatingInput"
        label="Tile of the book"
        className="mb-3"
        name="name"
      >
      <Form.Control type="text" placeholder="First name" />
      </FloatingLabel>
      
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Cover of the book</Form.Label>
        <Form.Control type="file" name= "image"/>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Select Pdf</Form.Label>
        <Form.Control type="file" name= "pdf"/>
      </Form.Group>

      <Button variant="primary" type="submit">
          Upload
      </Button>
      <Link to='/home'>
      <Button variant="light" type="submit">
          Cancel
      </Button>
      </Link>
    </div>
  );
}

export default BookEdit;
