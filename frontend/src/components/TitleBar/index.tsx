import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";
import './styles.css';

type Props = {
    tituloPagina: string;  
}

const TitleBar = ({ tituloPagina } : Props) => {
    return (
        <div className="container-title-bar">
            <div className="container-icone"><BsHouseDoor className="icone-title-bar" /></div>
            <div className="container-titulo"><h1>{tituloPagina}</h1></div>
            <div className="container-usuario-logado"><label className="label-usuario-logado">Usuário logado: henriquems@gmail.com</label></div>
        </div>
    );
}

export default TitleBar;