import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table } from 'react-bootstrap';

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]); // Initialize with an empty array
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users", {
         // method: "GET", 
        headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const result = await response.json();
        if (Array.isArray(result)) {
          setUsers(result);
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      fetchUsers();
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className='text-center'>Dashboard</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>NAME</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              { Array.isArray(users) && users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center">No users found</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
