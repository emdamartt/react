import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { CartProvider } from './components/CartContext'
import { Cart } from './components/Cart'
import Checkout from './components/Checkout'


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/products/:category' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout />} /> 
            <Route path='/cart' element={<Cart />} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
