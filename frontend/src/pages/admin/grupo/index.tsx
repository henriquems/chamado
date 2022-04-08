import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Route, Switch } from "react-router-dom";
import CadastroGrupo from "./cadastro";
import PesquisaGrupos from "./pesquisa";

const Grupos = () => {
    return (
        <>
        <Navbar />
       
        <Switch>
           <Route path="/admin/grupo" exact>
               <PesquisaGrupos />
           </Route>
           <Route path="/admin/grupo/:codigo">
               <CadastroGrupo />
           </Route>
        </Switch>

        <Footer />
        </>
    );
}

export default Grupos;