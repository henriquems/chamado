import { Route, Switch } from "react-router-dom";
import CadastroSubcategoria from "./cadastro";
import PesquisaSubcategorias from "./pesquisa";

const Subcategorias = () => {
  return (
    <Switch>
      <Route path="/admin/subcategoria" exact>
        <PesquisaSubcategorias />
      </Route>
      <Route path="/admin/subcategoria/:codigo">
        <CadastroSubcategoria />
      </Route>
    </Switch>
  );
};

export default Subcategorias;
