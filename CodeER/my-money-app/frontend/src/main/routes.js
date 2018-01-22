import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import AuthOrApp from './auth-or-app';
import Dashboard from '../components/dashboard';
import BillingCycle from '../components/billing-cycle';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path="billingCycles" component={BillingCycle} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
