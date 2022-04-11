import { Link, useHistory, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from "assets/img/logo.svg";
import { useContext, useState } from 'react';
import { AuthContext } from 'AuthContext';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/requests';
import { saveAuthData } from 'util/storage';
import { getTokenData } from 'util/auth';

import './styles.css';

type CredentialsDTO = {
  username: string;
  password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {
  const location = useLocation<LocationState>();
 
  const { from } = location.state || { from: { pathname: '/admin' } };

  const { setAuthContextData } = useContext(AuthContext);

  const [hasErro, setHasErro] = useState(false);
  
  const { register, handleSubmit, formState: {errors} } = useForm<CredentialsDTO>();

  const history = useHistory();

  const onSubmit = (formData: CredentialsDTO) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasErro(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData()          
        });
        history.replace(from);
      })
      .catch((error) => {
        setHasErro(true);
        console.log('ERRO', error);
      });
  };

  return (
    <div className='container-login'>
      <div className="base-card-login login-card">
        <div className='container-logo-login'>
          <Logo className="logo logo-hover" />
        </div>
        
        {hasErro && (
          <div className="alert alert-danger" role="alert">
              Erro ao tentar efetuar o login!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register('username', {
                  required: 'Campo e-mail obrigatório',
                  pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'E-mail inválido'
                  }
              })}
              type="text"
              className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
              placeholder="Email"
              name="username"
            />
            <div className="invalid-feedback d-block">{ errors.username?.message }</div>
          </div>
          
          <div className="mb-2">
            <input
              {...register('password', {
                  required: 'Campo senha obrigatório'
              })}
              type="password"
              className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Senha"
              name="password"
            />
            <div className="invalid-feedback d-block">{ errors.password?.message }</div>
          </div>
          
          <Link to="/admin/auth/senha" className="login-link-recover">
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
