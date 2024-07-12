import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import { CartContextProvider } from './context/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';



function App() {
    return (
        <ChakraProvider>
        <CartContextProvider>
        <BrowserRouter>
            <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer title="La Tienda" />} />
        <Route path='/categorias/:categoryId' element={<ItemListContainer title="La Tienda" />} />
        <Route path='/producto/:productId' element={<ItemDetailContainer />} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Checkout' element= {<Checkout/>} />
        <Route path='*' element={<PageNotFound />} />
        </Routes>
        </BrowserRouter>
        </CartContextProvider>
</ChakraProvider>
    );
}

export default App;
