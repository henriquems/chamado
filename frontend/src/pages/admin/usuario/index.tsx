import { Route, Switch } from "react-router-dom";
import CadastroUsuario from "./cadastro";
import PesquisaUsuarios from "./pesquisa";

const Usuarios = () => {
  return (
    <Switch>
      <Route path="/admin/usuario" exact>
        <PesquisaUsuarios />
      </Route>
      <Route path="/admin/usuario/:codigo">
        <CadastroUsuario />
      </Route>
    </Switch>
  );
};

export default Usuarios;
