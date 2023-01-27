import React from 'react';
import CartWidget from "./CartWidget.jsx";
import {Container, Flex, Spacer, Box, Heading, Input, InputGroup, InputRightAddon, Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import {SearchIcon} from "@chakra-ui/icons";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
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
                        <Tabs variant='unstyled'>
                            <TabList>
                                <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Nacional</Tab>
                                <Tab _selected={{ color: 'white', bg: 'green.400' }}>Importada</Tab>
                                <Tab _selected={{ color: 'white', bg: 'red.300' }}>Stuff</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <p>Nacional</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>Importada</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>Stuff</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </Flex>
            </Container>
        </>
    );
};

export default NavBar;