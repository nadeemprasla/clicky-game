import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Wrapper from './component/Wrapper';
import Card from "./component/Card"
import Characters from "./characters.json"
import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: Characters,
            score: 0,
            topScore: 0,
            status: ""
        }
    }
    componentDidMount() {
        let { score, topScore } = this.state;
        if (score > topScore) {
            this.setState(() => ({
                topScore: score
            }))
        }
    }
    componentDidUpdate() {
        if (this.state.score === 12) {
            this.reset({ status: "Click on any character to start" })
        }
    }

    handleClickChoice = (id) => {
        let { data, score, topScore } = this.state;
        let dataNew = data.map((entry) => {
            if (entry.id === id && entry.click === false) {
                entry.click = true;
                this.setState((prevState) => {
                    if (topScore === 11) {
                        return ({
                            score: prevState.score + 1,
                            topScore: 12,
                            status: "You win!!!"
                        })
                    } else if (score + 1 > topScore) {
                        return ({
                            score: prevState.score + 1,
                            topScore: prevState.score + 1,
                            status: "You have guessed Correctly!"
                        })
                    } else {
                        return ({
                            score: prevState.score + 1,
                            status: "You have guessed Correctly!"
                        })
                    }
                })
            } else if (entry.id === id && entry.click === true) {
                this.reset({ status: "You already picked this character. Try Again." })
            }
            return entry
        })
        this.setState({ data: dataNew })
    }

    reset = (obj) => {
        let dataNew = this.state.data.map((entry) => {
            entry.click = false
            return entry
        });
        this.setState({
            data: dataNew,
            score: 0,
            status: obj.status
        })
    }

    checkTopScore = () => {
        let { score, topScore } = this.state
        if (score > topScore) {
            this.setState({
                topScore: score
            })
        }
    }




    render() {
        return (
            <Container fluid>
                <NavBar score={this.state.score} topScore={this.state.topScore} status={this.state.status} />


                <Row className="row-jumbotron">
                    <Header />
                </Row>

                <Wrapper >
                    {this.state.data.map((Char) => {
                        return <Card
                            key={Char.id}
                            name={Char.name}
                            image={Char.image}
                            clicked={Char.click}
                            clickEvent={() => {
                                this.handleClickChoice(Char.id)
                            }}
                        />

                    })}
                </Wrapper>

            </Container>
        );
    }
}

export default App;
