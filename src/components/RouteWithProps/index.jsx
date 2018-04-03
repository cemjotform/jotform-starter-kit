import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const RouteWithProps = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => React.createElement(component, {
      ...routeProps,
      ...rest
    })}
  />
);

RouteWithProps.propTypes = {
  component: PropTypes.element
};

RouteWithProps.defaultProps = {
  component: () => <div />
};

export default RouteWithProps;
