import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Route, Switch } from "react-router-dom";
import CadastroUsuario from "./cadastro";
import PesquisaUsuarios from "./pesquisa";

const Usuarios = () => {
    return (
        <>
        <Navbar />
       
        <Switch>
           <Route path="/admin/usuario" exact>
               <PesquisaUsuarios />
           </Route>
           <Route path="/admin/usuario/:codigo">
               <CadastroUsuario />
           </Route>
        </Switch>

        <Footer />
        </>
    );
}

export default Usuarios;