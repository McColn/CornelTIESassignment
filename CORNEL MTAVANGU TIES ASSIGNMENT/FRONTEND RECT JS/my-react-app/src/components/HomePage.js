import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Modal } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarPage from './NavbarPage';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getBooks();
  }, []);


  function getBooks()
  {
    fetch('http://127.0.0.1:8000/api/book/').then((result)=>{
      result.json().then((resp)=>{
        setBooks(resp)
      })
    })
  }

  const handleImageClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function bookDelete(id) {
    fetch(`http://127.0.0.1:8000/api/book/${id}`, {
      method: 'DELETE'
    })
    .then((result) => {
      if (result.ok) {
        // Check if there is content before parsing JSON
        if (result.status !== 204) {
          return result.json().then((resp) => {
            console.warn(resp);
          });
        } else {
          // Handle empty response (status 204)
          console.warn('No content in the response');
        }
      } else {
        console.error('Failed to delete the book');
      }
    });
  }
  

  return (
    <div className="container mt-4">
      <NavbarPage />
      <h4>Library Books</h4>
      <Row>
        {/* Display each book as a card */}
        {books.map((book) => (
          <Col key={book.id} md={3}>
            <Card>
              <Card.Img onClick={() => handleImageClick(book)} style={{ cursor: 'pointer' }} variant="top" src={book.cover_image} alt={book.title} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <span>{book.title}</span>
                  <div>
                    {/* <i className="bi bi-pencil-square text-primary mr-5"></i> */}
                    <i className="bi bi-trash text-danger mr-5" onClick={()=>bookDelete(book.id)} style={{ cursor: 'pointer' }}></i>
                    {/* <i className="bi bi-heart-fill text-danger"></i> */}
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to='/upload'>
        <Button variant="primary" className='mt-3'>
          Add New Book
        </Button>
      </Link>

      {/* Modal to display PDF file */}
      {selectedBook && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedBook.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Display PDF file or embed a PDF viewer component */}
            <embed src={selectedBook.pdf_file} type="application/pdf" width="100%" height="500px" />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default HomePage;
