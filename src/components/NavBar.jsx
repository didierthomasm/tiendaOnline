import React from 'react';
import CartWidget from "./CartWidget.jsx";
import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react'

const NavBar = ({  }) => {
    return (
        <>
            <Container maxW='100rem' bg='green.200' color='#262626'>
                <Flex alignContent='center' gap='2'>
                    <Box p='2' color='white'>
                        <Heading size='md'>Cheve...</Heading>
                    </Box>
                    <Spacer />
                    <Box>
                        <CartWidget />
                    </Box>
                </Flex>
            </Container>
        </>
    );
};

export default NavBar;