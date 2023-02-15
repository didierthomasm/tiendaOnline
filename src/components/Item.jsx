import React from 'react';
// import { link } from 'react-router-dom';
import {Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Item = ({ id, price, name, image, ratings}) => {
  return (
    <div key={id}>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={image}
            alt={name}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Text>
              {`Beer ${name} ratings: ${ratings}`}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              <Link to={`/item/${id}`}> Details </Link>
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
