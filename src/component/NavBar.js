import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = ({ score, topScore, status }) => {

    return (
        <Row className="nav-bar">

            <Col className="title">
                <a href="/">Clicky Game</a>
            </Col>

            <Col>
                {status || "Click on any character to start"}
            </Col>

            <Col>
                Score: {score || 0} | Top Score: {topScore || 0}
            </Col>
        </Row>
    )
}

export default NavBar;