import TitleBar from "components/TitleBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-chamado">
      <TitleBar tituloPagina="Home" />

      <div className="base-card">
        <div className="container-card-titulo">
          <label className="card-titulo">Dados da Home</label>
        </div>

        <Link to="/admin/auth/login">Login</Link>
      </div>
    </div>
  );
};

export default Home;
