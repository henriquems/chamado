import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";
import './styles.css';

type Props = {
    tituloPagina: string;
}

const TitleBar = ({ tituloPagina } : Props) => {
    return (
        <div className="container-title-bar">
             <div className="">
                <BsHouseDoor className="icone-title-bar" />
             </div>
             <div className="container-titulo">
                <h1>{tituloPagina}</h1>
             </div>
        </div>
    );
}

export default TitleBar;