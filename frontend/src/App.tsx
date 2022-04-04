import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "components/Navbar";
import Footer from "components/Footer";
import Login from "pages/login";
import './App.css';
import Home from "pages/admin/home";
import Usuario from "pages/admin/usuario";
import Categoria from "pages/admin/categoria";
import Subcategoria from "pages/admin/subcategoria";
import Grupo from "pages/admin/grupo";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/" element={<Home /> } />
          <Route path="/admin/usuario/" element={<Usuario /> } />
          <Route path="/admin/grupo/" element={<Grupo /> } />
          <Route path="/admin/categoria/" element={<Categoria /> } />
          <Route path="/admin/subcategoria/" element={<Subcategoria /> } />
        </Routes>
        
        <Footer />
    </BrowserRouter>
  );
}

export default App;
