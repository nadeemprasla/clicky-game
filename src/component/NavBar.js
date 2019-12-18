import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = () => {

    return (
        <Row className="nav-bar">

            <Col className="title">
                <h2>Clicky Game</h2>
            </Col>

            <Col>
                <h2>You have guessed Correctly!</h2>
            </Col>

            <Col>
                <h2>Score: 0 | Top Score: 0</h2>
            </Col>
        </Row>
    )
}

export default NavBar;