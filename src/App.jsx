import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'

import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {

  return (
  <BrowserRouter>
    <NavBar />

    <Routes>
      <Route exact path='/' element={ <Welcome />} />
      <Route exact path='/catalogue' element={ <ItemListContainer />} />
      <Route exact path='/catalogue/:category' element={ <ItemListContainer />} />
      <Route exact path='/item/:id' element={ <ItemDetailContainer />} />
      <Route exact path='/cart' element={ <Cart />} />
    </Routes>

  </BrowserRouter>
  );
}
export default App
