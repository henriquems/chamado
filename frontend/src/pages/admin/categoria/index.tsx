import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Route, Switch } from "react-router-dom";
import CadastroCategoria from "./cadastro";
import PesquisaCategorias from "./pesquisa";

const Categorias = () => {
    return (
        <>
        <Navbar />
       
        <Switch>
           <Route path="/admin/categoria" exact>
               <PesquisaCategorias />
           </Route>
           <Route path="/admin/categoria/:codigo">
               <CadastroCategoria />
           </Route>
        </Switch>

        <Footer />
        </>
    );
}

export default Categorias;