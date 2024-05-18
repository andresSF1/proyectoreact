import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
        <Box className="App">
            <NavBar />
            <ItemListContainer title="La Tienda" />
        </Box>
</ChakraProvider>
    );
}

export default App;
