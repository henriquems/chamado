import { Router, Route, Switch } from "react-router-dom";
import history from "util/history";
import Login from "pages/Login";
import Categorias from "pages/admin/categoria";
import Subcategorias from "pages/admin/subcategoria";
import Usuarios from "pages/admin/usuario";
import Grupos from "pages/admin/grupo";
import Admin from "pages/admin";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            
            <Route path="/admin" exact>
                <Navbar/>
                <Admin />
                <Footer />
            </Route>
            
            <Route path="/admin/categoria" exact>
                <Categorias />
            </Route>
            <Route path="/admin/categoria/create" exact>
                <Categorias />
            </Route>
            <Route path="/admin/categoria/:codigo" exact>
                <Categorias />
            </Route>


            <Route path="/admin/subcategoria" exact>
                <Subcategorias />
            </Route>
            <Route path="/admin/sub/categoria/create" exact>
                <Subcategorias />
            </Route>
            <Route path="/admin/subcategoria/:codigo" exact>
                <Subcategorias />
            </Route>
            
            
            <Route path="/admin/usuario" exact>
                <Usuarios />
            </Route>
            <Route path="/admin/usuario/create" exact>
                <Usuarios />
            </Route>
            <Route path="/admin/usuario/:codigo" exact>
                <Usuarios />
            </Route>

            
            <Route path="/admin/grupo" exact>
                <Grupos />
            </Route>
            <Route path="/admin/grupo/create" exact>
                <Grupos />
            </Route>
            <Route path="/admin/grupo/:codigo" exact>
                <Grupos />
            </Route>

            
        </Switch>
    </Router>
);

export default Routes;