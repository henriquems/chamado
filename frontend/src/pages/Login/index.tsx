import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "assets/img/logo.svg";

import './styles.css';

const Login = () => {
 
  return (
    <div className='container-login'>
      <div className="base-card-login login-card">
        <div className='container-logo-login'>
          <Logo className="logo logo-hover" />
        </div>
        
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder='E-mail'
              className="form-control"
              name="descricao"
            />
            <div className="invalid-feedback d-block"></div>
          </div>
          
          <div className="mb-2">
            <input
              type="text"
              placeholder='Senha'
              className="form-control"
              name="descricao"
            />
            <div className="invalid-feedback d-block"></div>
          </div>
          
          <Link to="/admin/auth/recover" className="login-link-recover">
            Esqueci a senha
          </Link>
          
          <div className="login-submit">
            <button type="submit" className="btn btn-primary text-white">
              LOGIN
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
