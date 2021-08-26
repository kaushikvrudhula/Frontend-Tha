import React from "react";
import { Link } from "react-router-dom";
import {Card, ListGroup,Button} from "react-bootstrap";
const ProductCard = ({title,image,desc,price}) => {
    return (
        <div className="wrapper">
        <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" variant="top" src="holder.js/100px180" />
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <ListGroup variant="flush">
            <ListGroup.Item>Rs.{price}</ListGroup.Item>
            </ListGroup>
        </Card>
        </div>
    );
};

export default ProductCard;