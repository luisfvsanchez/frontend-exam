// Tools
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// Selectors
import selectCurrentUser from './redux/user/user.selectors';

// Pages
import Dashboard from './pages/dashboard/dashboard.component';
import SignIn from './pages/sign-in/sign-in.component';
import LoadingPage from './pages/loading/loading-page.component';

// Router Components
import AuthenticatedRoute from './router/authenticated-route/authenticated-route.component';
import UnauthenticatedRoute from './router/unauthenticated-route/unauthenticated-route.component';

// Styles
import './App.css';

function App({ currentUser }) {
  const isUserAuthenticated = currentUser != null;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <LoadingPage userAuth={isUserAuthenticated} />} />
        <AuthenticatedRoute userAuth={isUserAuthenticated} path="/dashboard" component={Dashboard} />
        <UnauthenticatedRoute userAuth={isUserAuthenticated} path="/login" component={SignIn} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

App.defaultProps = {
  currentUser: null,
};

App.propTypes = {
  currentUser: PropTypes.shape({}),
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
