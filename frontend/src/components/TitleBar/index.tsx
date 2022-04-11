import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";
import { useEffect, useState } from "react";
import { getTokenData, isAuthenticated, TokenData } from "util/auth";
import "./styles.css";

type Props = {
  tituloPagina: string;
};

type AuthData = {
  authenticated: boolean,
  tokenData?: TokenData
}

const TitleBar = ({ tituloPagina }: Props) => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false })
  
  useEffect(() =>{
    if(isAuthenticated()) {
      setAuthData({
        authenticated : true,
        tokenData: getTokenData()
      });
    } else {
      setAuthData({
        authenticated : false
      });
    }
  }, [setAuthData]);

  return (
    <div className="container-title-bar">
      <div className="container-icone">
        <BsHouseDoor className="icone-title-bar" />
      </div>
      <div className="container-titulo">
        <h1>{tituloPagina}</h1>
      </div>
      <div className="container-usuario-logado">
        <label className="label-usuario-logado">
          Usuário logado: {authData.tokenData?.user_name}
        </label>
      </div>
    </div>
  );
};

export default TitleBar;
