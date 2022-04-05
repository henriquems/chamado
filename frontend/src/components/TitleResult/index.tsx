import { AiOutlineFileSearch } from "@react-icons/all-files/ai/AiOutlineFileSearch";
import './styles.css';

type Props = {
    descricao: string;
    quantidade: number;
}

const TitleResult = ({descricao, quantidade} : Props) => {
    return (
        <div className="container-titulo-resultado-pesquisa">
            <div className="container-title-bar-resultado-pesquisa">
                <div>
                    <AiOutlineFileSearch className="icone-title-result" />
                </div>
                <div className="container-titulo-resultado">
                    <label className='label-resultado-pesqusia'>Foram encontrados {quantidade} {descricao}s para sua pesquisa</label>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-primary text-white">Novo {descricao}</button>
            </div>
        </div>
        
        
       
    );
}

export default TitleResult;