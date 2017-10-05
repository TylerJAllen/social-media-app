import React from "react";
import {Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { db, auth, storageKey, isAuthenticated } from "../firebase.js";
import PropTypes from 'prop-types';

export const MatchWhenAuthorized = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }} />
    )
  )}/>
)

MatchWhenAuthorized.propTypes = {
  component: PropTypes.any
}
