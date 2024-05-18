import React from 'react'
import CartWidget from "../CartWidget/CartWidget.jsx"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Center,
} from '@chakra-ui/react';
import { CgPushChevronDown } from "react-icons/cg";

const NavBar = () => {
  return (
    <Flex h={'10vh'} w={'100%'} justifyContent={'space-between'} align={'center'} backgroundColor={'red'}>
      <Heading>logo</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<CgPushChevronDown />}>Menú </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
      <CartWidget />
    </Flex>
  )
}

export default NavBar