import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Card, Button, Row, Col } from 'react-bootstrap';

export default function HomePage() {

  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  console.log(user)
  useEffect(() => {
    if (!user.logged_in) {
      return navigate('/auth')
    }
  })
  return (
    <>
      <Card className="justify-content-md-center">
        <Card.Img variant="top" />
        <Card.Body>
          <Row>
            <Col xs={2} md={2} />
            <Col xs={8} md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col xs={2} md={2} />
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}