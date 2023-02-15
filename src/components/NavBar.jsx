import React from 'react';
import CartWidget from "./CartWidget.jsx";
import {Container, Flex, Spacer, Box, Heading, Input, InputGroup, InputRightAddon} from '@chakra-ui/react'
import {ChevronDownIcon, SearchIcon} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import {Link} from "react-router-dom";

const NavBar = ({  }) => {
  return (
    <>
      <Container
        className='nava-bar-container' display='flex' maxW='100rem' bg='green.200' color='#262626'
        flexDirection='column' gap='1'
      >
        <Flex>
          <Box p='2' color='white'>
            <Heading size='md'>
              <Link to={'/'}>Cheve...</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <InputGroup>
              <Input width='100%' placeholder='Encuentra tu cheve' />
              <InputRightAddon  children={<SearchIcon color='green.500' />} />
            </InputGroup>
          </Box>
          <Spacer />
          <Box flexDirection='column' >
            <CartWidget shoppingCount='0' />
          </Box>
        </Flex>
        <Flex  justifyContent='center'>
          <Box>
            <Menu>
              <Link to={`/category/${'All'}`}>
                <MenuButton
                  px={4}
                  py={2}
                  transition='all 0.2s'
                  borderRadius='md'
                  borderWidth='1px'
                  _hover={{ bg: 'gray.400' }}
                  _expanded={{ bg: 'blue.400' }}
                  _focus={{ boxShadow: 'outline' }}
                >
                  Todas
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
              >
                Por Estilo <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <Link to={`/category/${'Ale'}`}>
                  <MenuItem>Ale</MenuItem>
                </Link>
                <Link to={`/category/${'Stout'}`}>
                  <MenuItem>Stout</MenuItem>
                </Link>
              </MenuList>
            </Menu>
            {/*<Menu>*/}
            {/*  <MenuButton*/}
            {/*    px={4}*/}
            {/*    py={2}*/}
            {/*    transition='all 0.2s'*/}
            {/*    borderRadius='md'*/}
            {/*    borderWidth='1px'*/}
            {/*    _hover={{ bg: 'gray.400' }}*/}
            {/*    _expanded={{ bg: 'blue.400' }}*/}
            {/*    _focus={{ boxShadow: 'outline' }}*/}
            {/*  >*/}
            {/*    Por Precio <ChevronDownIcon />*/}
            {/*  </MenuButton>*/}
            {/*  <MenuList>*/}
            {/*    <MenuItem>Menor a mayor</MenuItem>*/}
            {/*    <MenuItem>Mayor a menor</MenuItem>*/}
            {/*  </MenuList>*/}
            {/*</Menu>*/}
            {/*<Menu>*/}
            {/*  <MenuButton*/}
            {/*    px={4}*/}
            {/*    py={2}*/}
            {/*    transition='all 0.2s'*/}
            {/*    borderRadius='md'*/}
            {/*    borderWidth='1px'*/}
            {/*    _hover={{ bg: 'gray.400' }}*/}
            {/*    _expanded={{ bg: 'blue.400' }}*/}
            {/*    _focus={{ boxShadow: 'outline' }}*/}
            {/*  >*/}
            {/*    Por Nombre <ChevronDownIcon />*/}
            {/*  </MenuButton>*/}
            {/*  <MenuList>*/}
            {/*    <MenuItem>A a Z</MenuItem>*/}
            {/*    <MenuItem>Z a A</MenuItem>*/}
            {/*  </MenuList>*/}
            {/*</Menu>*/}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;