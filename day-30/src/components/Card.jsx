import React from "react";
import { Link } from "react-router-dom";

const Card = ({
    isLoading,
    id,
    title,
    description,
    image,
    price,
    isIndWishlist,
    selectProduct,
}) => {
    console.log(title);
    if (isLoading)
        return(
            <Card style={{width: '18rem'}}>
                <Card.Title>Loading....</Card.Title>
            </Card>
        )
}