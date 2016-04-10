import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import Menu from './components/Menu/Menu';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="menu" component={Menu}/>
    </Route>
  </Router>
), document.getElementById('root'));
