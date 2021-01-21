import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import Error404 from 'pages/Error404';
import '../style.scss';

const AppRouter = props => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route component={Error404} />
    </Switch>
  </React.Fragment>
);


export default AppRouter;
