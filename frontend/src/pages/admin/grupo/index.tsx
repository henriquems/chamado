import GrupoFilter from "components/GrupoFilter";
import TitleBar from "components/TitleBar";
import TitleResult from "components/TitleResult";

const Grupos = () => {
    return (
        <div className="container">
            <TitleBar tituloPagina="Grupos" />

            <GrupoFilter />

            <TitleResult descricao="grupo" quantidade={10} />

        </div>
    );
}

export default Grupos;