import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from 'routers/AppRouter';


// we now wrap AppRouter in a Provider for Redux
ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById('main'),
);
