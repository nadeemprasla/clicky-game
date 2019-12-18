import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Wrapper from './component/Wrapper';
import Card from "./component/Card"
import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    handleClickChoice = () => {

    }


    render() {
        return (
            <Container fluid>
                    
                <NavBar />
                

                <Row className="row-jumbotron">
                <Header />
                </Row>

               <Wrapper>
                   <Card />
               </Wrapper>

            </Container>
        );
    }
}

export default App;
