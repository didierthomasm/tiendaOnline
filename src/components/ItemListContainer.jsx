import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";

const ItemListContainer = ({  }) => {
  const { category } = useParams();
  console.log(category)

  function getDataAle() {
    const [data, setData] = useState("");
    const getDataAle = async () => {
      const resp = await fetch('https://api.sampleapis.com/beers/ale');
      const json = await resp.json();
      setData(json);
    }

    useEffect(() => {
      getDataAle();
    }, []);

    return (
      data
    )
  }

   function getDataStout() {
     const [data, setData] = useState("");
     const getDataStout = async () => {
       const resp = await fetch('https://api.sampleapis.com/beers/stout');
       const json = await resp.json();
       setData(json);
     }

     useEffect(() => {
       getDataStout();
     }, []);

     return (
       data
     )
   }
  console.log('Estas son las ales: ' , getDataAle())
  // console.log('Estas son las stouts: ', getDataStout())
  console.log('Tipo dato ales: ', typeof(getDataAle()))
    return (
        <div>
            <ItemList />

        </div>
    );
};

export default ItemListContainer;