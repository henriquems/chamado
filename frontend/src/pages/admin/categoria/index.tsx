
import { Route, Switch } from "react-router-dom";
import CadastroCategoria from "./cadastro";
import PesquisaCategorias from "./pesquisa";

const Categorias = () => {
    return (
        <Switch>
            <Route path="/admin/categoria" exact>
                <PesquisaCategorias />
            </Route>
            <Route path="/admin/categoria/:codigo">
                <CadastroCategoria />
            </Route>
        </Switch>
    );
}

export default Categorias;