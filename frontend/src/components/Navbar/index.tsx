import { ReactComponent as Logo } from "assets/img/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { BsGear } from "@react-icons/all-files/bs/BsGear";
import { RiLogoutCircleRLine } from "@react-icons/all-files/ri/RiLogoutCircleRLine";
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import { removeAuthData } from "util/storage";
import { useContext } from "react";
import { AuthContext } from "AuthContext";
import history from "util/history";

const Navbar = () => {
  const { setAuthContextData } = useContext(AuthContext);
  
  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated : false
    });
    history.replace('/admin/auth/login')
  }

  return (
    <div className="main-nav">
      <div className="container-chamado">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link to="/">
            <Logo className="logo logo-hover" />
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
                  <NavLink to="/admin">
                    <BsHouseDoor className="icone-menu" />
                    Home
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to="/admin/usuario">
                    <FaUser className="icone-menu" />
                    Usu??rios
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle nav-titulo-submenu"
                  data-bs-toggle="dropdown"
                >
                  <BsGear className="icone-menu" /> Configura????es
                </div>
                <ul className="dropdown-menu dropdown-menu-end fade-down">
                  <li>
                    <div className="dropdown-item">
                      <NavLink to="/admin/subcategoria">
                        <AiFillFolderOpen className="icone-menu" />
                        Subcategoria
                      </NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item">
                      <NavLink to="/admin/categoria/">
                        <AiFillFolderOpen className="icone-menu" />
                        Categoria
                      </NavLink>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to="/">
                    <RiLogoutCircleRLine className="icone-menu" />
                    <a href="#logout" onClick={handleLogoutClick}>
                      Logout
                    </a>
                  </NavLink>
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
