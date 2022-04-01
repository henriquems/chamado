import { ReactComponent as Logo } from "assets/img/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { BsGear } from "@react-icons/all-files/bs/BsGear";
import { RiLogoutCircleRLine } from "@react-icons/all-files/ri/RiLogoutCircleRLine";
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";


import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="main-nav">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary main-nav">
          <Link to="/">
            <Logo className="logo-hover" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to="/admin"><BsHouseDoor className="icone-menu" />Home</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to="/admin/usuario"><FaUser className="icone-menu" />Usuários</NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle nav-titulo-submenu" data-bs-toggle="dropdown">
                  <BsGear className="icone-menu" /> Configurações
                </div>
                <ul className="dropdown-menu dropdown-menu-end fade-down">
                  <li>
                    <div className="dropdown-item">
                      <NavLink to="/admin/categoria"><AiFillFolderOpen className="icone-menu" />Categoria</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item">
                      <NavLink to="/admin/subcategoria"><AiFillFolderOpen className="icone-menu" />Subcategoria</NavLink>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to="/"><RiLogoutCircleRLine className="icone-menu" />Logout</NavLink>
                </div>
              </li>
            </ul>
          </div>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
