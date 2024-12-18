import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import './App.css'

function App() {
  

  return (
    <div className="container-app">

      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path="/" element={ <ItemListContainer greeting={"Bienvenido a nuestra tienda."}/> } />   
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenido a nuestra tienda."}/>} /> 
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer/> } />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>


      </BrowserRouter>
    </div>

  )
}

export default App
