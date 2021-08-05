import React from "react";
import { Link } from "react-router-dom";
import {Card, ListGroup} from "react-bootstrap";
const ProductCard = ({title,image,desc,price}) => {
    return (
        <Card>
            <Card.Img variant="top" />
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <ListGroup variant="flush">
            <ListGroup.Item>Rs.{price}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

export default ProductCard;