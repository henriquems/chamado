import { ReactComponent as LogoRodape } from "assets/img/logo-rodape.svg";
import './styles.css';

function Footer() {
    return (
        <footer className="rodape mt-auto py-3">
            <div className='container-rodape'>
                <div className='container-logo-rodape'>
                    <LogoRodape />
                </div>
                <div className='container-texto-rodape'>
                    <p className="text-center">&copy; 2022 Sistema de Chamados Feluma
                    <br />Desenvolvido por T.I Feluma</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;