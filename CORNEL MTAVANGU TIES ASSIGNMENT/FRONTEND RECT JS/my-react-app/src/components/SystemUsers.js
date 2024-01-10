import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import NavbarPage from './NavbarPage';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function SystemUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/list-user/');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  function userDelete(id) {
    fetch(`http://127.0.0.1:8000/api/delete-user/${id}`, {
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
      <h4>System users</h4>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                    {/* <i className="bi bi-pencil-square text-primary mr-5"></i> */}
                    <i className="bi bi-trash text-danger mr-5" onClick={()=>userDelete(user.id)} style={{ cursor: 'pointer' }}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/adduser">
        <Button variant="primary">Add New User</Button>
      </Link>
      
    </div>
  );
}

export default SystemUsers;
