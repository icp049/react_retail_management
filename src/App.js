import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Cart from './pages/Cart';
import './App.css'; // import external css file




export default function App(){
  return(
    <div>
      <BrowserRouter>
        
        <nav>
          <h1>Logo</h1>
              <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
             <li><Link to="/about">Featured</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/cart">My Cart</Link></li>
              <li>Account</li>
             
            </ul>
          </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
      
        </Routes>
      </BrowserRouter>
    </div>
  )
}
