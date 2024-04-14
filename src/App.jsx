import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'

function App() {
  return (
    <>  
        <BrowserRouter>
            <Header/>
            <Routes> 
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<ItemListContainer/>} />
                <Route path='/products/:category' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
