import React from 'react';

import Item from "./Item.jsx";

import { Container } from "@chakra-ui/react";

const ItemList = ({ beers }) => {
  return (
    <div>
      <Container maxW="container.sm" className="main-catalogue">
        {beers?.map((beer) => (
          <Item
            key={beer.id}
            id={beer.id}
            name={beer.name}
            description={beer.description}
            price={beer.price}
            stock={beer.stock}
            image={beer.image}
            rating={beer.rating}
          />
        ))}
      </Container>
    </div>
  );
};

export default ItemList;
