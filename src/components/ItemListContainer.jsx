import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category)

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  if (category === undefined) {
    return (
      <div>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Beer Catalogue
          </Heading>
        </Center>
        <ItemList beers={Data} />
      </div>
    );
  } else {
    const catFilter = Data.filter((beer) => beer.category === category);
    return (
      <div>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Beers by Category
          </Heading>
        </Center>
        {catFilter ? <ItemList beers={catFilter} /> : <ItemList beers={Data} />}
      </div>
    );
  }
};

export default ItemListContainer;
