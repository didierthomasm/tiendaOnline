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

const NavBar = ({  }) => {
    return (
        <>
            <Container
                className='nava-bar-container' display='flex' maxW='100rem' bg='green.200' color='#262626'
                flexDirection='column' gap='1'
            >
                <Flex>
                    <Box p='2' color='white'>
                        <Heading size='md'>Cheve...</Heading>
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
                                Nacionales <ChevronDownIcon />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Por marca</MenuItem>
                                <MenuItem>Por estílo</MenuItem>
                            </MenuList>
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
                                Importadas <ChevronDownIcon />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Por marca</MenuItem>
                                <MenuItem>Por estílo</MenuItem>
                                <MenuItem>Por país</MenuItem>
                            </MenuList>
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
                                Stuff <ChevronDownIcon />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Cristalería</MenuItem>
                                <MenuItem>Ropa</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Container>
        </>
    );
};

export default NavBar;