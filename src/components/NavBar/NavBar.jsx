import React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Image,
} from '@chakra-ui/react';
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import logo from '../../assets/logo-a.png'

const Navbar = () => {
  return (
	<Flex
  	h={'10vh'}
  	w={'100%'}
  	justify={'space-between'}
  	align={'center'}
  	backgroundColor={'#063970'}>
  	<Heading m={3}><Link to='/'> <Image src={logo} alt='logo' boxSize='100px'/>
</Link></Heading>
  	<Menu>
    	<MenuButton as={Button} rightIcon={<HiOutlineChevronDoubleDown />}>
      	Menú desplegable
    	</MenuButton>
    	<MenuList>
      	<MenuItem as={RouterLink} to='/categorias/Teclados'>Teclados</MenuItem>
      	<MenuItem as={RouterLink} to='/categorias/Mouse'>Mouse</MenuItem>
      	<MenuItem as={RouterLink} to='/categorias/TarjetaDeVideo'>TarjetaDeVideo</MenuItem>
      	<MenuItem as={RouterLink} to='/categorias/Audifonos'>Audifonos</MenuItem>
        <MenuItem as={RouterLink} to='/categorias/Mousepad'>Mousepad</MenuItem>
    	</MenuList>
  	</Menu>
  	<CartWidget />
	</Flex>
  );
};

export default Navbar;