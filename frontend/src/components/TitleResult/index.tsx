import { AiOutlineFileSearch } from "@react-icons/all-files/ai/AiOutlineFileSearch";
import { Link } from "react-router-dom";
import './styles.css';

type Props = {
    descricao: string;
    quantidade: number;
    caminho: string;
}

const TitleResult = ({descricao, quantidade, caminho} : Props) => {
    return (
        <div className="container-titulo-resultado-pesquisa">
            <div className="container-title-bar-resultado-pesquisa">
                <div>
                    <AiOutlineFileSearch className="icone-title-result" />
                </div>
                <div className="container-titulo-resultado">
                    <label className='label-resultado-pesqusia'>Sua pesquisa retornou {quantidade} {descricao}s</label>
                </div>
            </div>
            <div>
                <Link to={`/admin/${caminho}/create`}>
                    <button type="button" className="btn btn-primary text-white">ADD {descricao.toUpperCase()}</button>
                </Link>
            </div>
        </div>
    );
}

export default TitleResult;