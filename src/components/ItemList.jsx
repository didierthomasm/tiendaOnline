import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ beers }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {beers?.map((beer) => (
          <Item
            key={beer.id}
            id={beer.id}
            name={beer.name}
            description={beer.description}
            price={beer.price}
            stock={beer.stock}
            category={beer.category}
            image={beer.image}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
