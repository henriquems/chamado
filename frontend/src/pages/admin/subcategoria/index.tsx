import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Route, Switch } from "react-router-dom";
import CadastroSubcategoria from "./cadastro";
import PesquisaSubcategorias from "./pesquisa";

const Subcategorias = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/admin/subcategoria" exact>
          <PesquisaSubcategorias />
        </Route>
        <Route path="/admin/subcategoria/:codigo">
          <CadastroSubcategoria />
        </Route>
      </Switch>

      <Footer />
    </>
  );
};

export default Subcategorias;
