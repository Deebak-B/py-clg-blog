import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <>
            <Container id='footerContainer'>
                <Row>
                    <Col>
                        <>
                            <h4>Pyclgblog</h4>
                        </>
                    </Col>
                    <Col>
                        <>
                            <a href='#'><h4> Developer Info</h4></a>
                            <p>Read more about the developers of the website here about the Developer</p>
                        </>
                    </Col>
                    <Col>
                        <div>
                            <h5>Navigations here!</h5>
                            <ul id='footerLinks'>
                                <li id='linkHome'><a href='google.com'>Home</a></li>
                                <li id='linkAbout'><a href='google.com'>About</a></li>
                                <li id='linkList'><a href='google.com'>List</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <h6 id="copyright">Developed by Team DAG Developers</h6>
        </>
    );
}