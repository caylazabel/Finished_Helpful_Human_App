import React from 'react';
import { Router, Route } from 'react-router';

import Detail from './Component/Detail';
import List from './Component/List';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={List} />
    <Route path="/detail" component={Detail} />
  </Router>
);

export default Routes;
