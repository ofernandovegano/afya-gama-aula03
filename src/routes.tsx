import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoutes from './private.routes';
import Home from './views/pages/Home';
import Login from './views/pages/Login';
import SignUp from './views/pages/SignUp';
import Dash from './views/pages/Dash'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/criar-conta" component={SignUp} />
        <PrivateRoutes path="/dash" exact Component={Dash} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;