
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Product } from './Pages/Product';
import { ShopCategory } from './Pages/ShopCategory';
import { Footer } from './components/Footer/Footer';
import { Shops } from './Pages/Shops';
import { Carts } from './Pages/Carts';
import { SignUpLogin } from './Pages/SignUpLogin'
import drugs_banner from './components/Assests/men.jpg'
import skins_banner from './components/Assests/kids.webp'
import beautys_banner from './components/Assests/home.jpg'
import acces_banner from './components/Assests/women.jpg'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
<Routes>
  <Route path='/' element={<Shops/>}/>
  <Route path='/drugs' element={<ShopCategory banner={drugs_banner} category="drugs"/>}/>
  <Route path='/skins' element={<ShopCategory banner={skins_banner} category="skins"/>}/>
  <Route path='/acces' element={<ShopCategory banner={acces_banner} category="acces"/>}/>
  <Route path='/beautys' element={<ShopCategory banner={beautys_banner} category="beautys"/>}/>
  <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
  </Route>
  <Route path='/login' element={<SignUpLogin/>}/>
  <Route path='/cart' element={<Carts/>}/>
  
</Routes>
<Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
