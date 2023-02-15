import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
} from "@chakra-ui/react";
import React from "react";

const Cart = () => {
  return (
    <Container className="cart-container">
      <FormControl>
        <Box>
          <FormLabel>Name</FormLabel>
          <Input id="name" type="text" />
          <FormLabel>Email</FormLabel>
          <Input id="email" type="email" />
          <FormLabel>Password</FormLabel>
          <Input id="password" type="password" />
          <FormHelperText>We'll never share your information.</FormHelperText>
        </Box>

        <Box className="btn-send">
          <Button colorScheme="teal" variant="outline">
            Send information
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
};

export default Cart;
