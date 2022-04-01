import { ReactComponent as LogoRodape } from "assets/img/logo-rodape.svg";
import './styles.css';

function Footer() {
    return (
        <footer className="footer mt-auto py-2">
            <div className='container-footer'>
                <div className='container-logo-rodape'>
                    <LogoRodape />
                </div>
                <div className='container-texto'>
                    <p className="text-center">&copy; 2022 Sistema de Chamados Feluma
                    <br />Desenvolvido por T.I Feluma</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;