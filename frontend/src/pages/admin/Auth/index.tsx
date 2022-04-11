import { Route, Switch } from "react-router-dom";
import Login from "./Login";

const Auth = () => {
  return (
    <Switch>
      <Route path="/admin/auth/login">
        <Login />
      </Route>

      <Route path="/admin/auth/senha">
        <h1>Recuperar Senha</h1>
      </Route>
    </Switch>
  );
};

export default Auth;
