import React from "react";
import { Container } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

function Feedback() {
    return (
        <>
            <Container bg-d>

                <Card>
                    <Card.Header>Feedback</Card.Header>
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Provide Feedback"
                                aria-label="Provide Feedback"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Post Feedback
                            </Button>
                        </InputGroup>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}
export default Feedback;