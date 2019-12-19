import React from "react";
import Card from 'react-bootstrap/Card'

const CardTemp = ({ name, clickEvent, image, clicked }) => {
    return (
        <Card style={{ width: '10rem', height: '15rem' }}>
            <Card.Img
                variant="top"
                onClick={clickEvent}
                alt={name}
                src={image}
                data-click={clicked} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    )
}


export default CardTemp;