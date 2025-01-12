import NavbarComponent from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDescription from "./pages/ProductDescription";

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDescription/>}/>


      </Routes>
      <ToastContainer/>
    </div>
     );
    }
    
    export default App;