import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "util/history";
import Admin from "pages/Admin";
import Auth from "pages/Admin/Auth";
import Home from "pages/Home";

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            
            <Redirect from='/admin/auth' to='/admin/auth/login' exact />
            <Route path="/admin/auth">
                <Auth />
            </Route>

            <Redirect from='/admin' to='/admin/categoria' exact />
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </Router>
);

export default Routes;