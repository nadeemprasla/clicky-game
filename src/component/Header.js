import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Header = () => {

    return (
        <Jumbotron fluid>
            <Container>
                <h1>Clicky Game!</h1>
                <br />
                <p>Click on an image to earn points</p>
                <p>don't click on any more than once!</p>
            </Container>
        </Jumbotron>

    )
}

export default Header;