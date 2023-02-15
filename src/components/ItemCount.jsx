import React from 'react';
import { useState } from 'react'

import {Box, Button, ButtonGroup, Container} from '@chakra-ui/react'
// import itemListContainer from "./ItemListContainer.jsx";
// import onAdd from "./ItemListContainer"
//
// onAdd(2)
// const ItemCount = ({ stock, initial, onAdd }) => {
//   return (
//     <>
//       <Container>
//         <Box>
//           <ButtonGroup variant='outline' spacing='6'>
//             <Button colorScheme='teal' variant='outline' onClick={onAdd}>
//               -
//             </Button>
//             <p>{add}</p>
//             <Button colorScheme='teal' variant='outline' onClick={sumar}>
//               +
//             </Button>
//           </ButtonGroup>
//         </Box>
//       </Container>
//     </>
//   );
// };
//
//
// export default ItemCount;
//
//
const addOn = ({ stock }) => {

  const [add, setAdd] = useState(1);

  const sumar = () => {
    if(add !== stock){
      setAdd(add + 1)
    }else {

    }
  };

  const restar = () => {
    if (add === 0) {

    }else {
      setAdd(add - 1)
    }
  };


  return (
    <>
      <Container>
        <Box>
          <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='teal' variant='outline' onClick={restar}>
              -
            </Button>
            <p>{add}</p>
            <Button colorScheme='teal' variant='outline' onClick={sumar}>
              +
            </Button>
          </ButtonGroup>
        </Box>
      </Container>
    </>
  );
};

export default addOn;