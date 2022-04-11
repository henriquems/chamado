import Footer from "components/Footer";
import Navbar from "components/Navbar";
import PrivateRoute from "components/PrivateRoute";
import { Switch } from "react-router-dom";
import Categorias from "./categoria";
import Subcategorias from "./subcategoria";
import Usuarios from "./usuario";

const Admin = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <PrivateRoute path="/admin/categoria">
          <Categorias />
        </PrivateRoute>

        <PrivateRoute path="/admin/subcategoria">
          <Subcategorias />
        </PrivateRoute>

        <PrivateRoute path="/admin/usuario" roles={['ROLE_ADMIN']}>
          <Usuarios />
        </PrivateRoute>
      </Switch>

      <Footer />
    </>
  );
};

export default Admin;
