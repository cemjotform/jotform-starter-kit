import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import React, { Component, Fragment } from 'react';


import Header from '../components/Header';
import ErrorPage from '../components/ErrorPage';
import RouteWithProps from '../components/RouteWithProps';
import SubmissionList from '../components/SubmissionList';

import {
  getFormSubmissions,
  getRandomFormSubmissions
} from '../actions';

class RootContainer extends Component {
  render() {
    const {
      store,
      submissions
    } = this.props;

    return (
      <Provider store={store}>
        <Fragment>
          <RouteWithProps
            component={Header}
            onReset={this.props.getRandomFormSubmissions}
          />
          <Switch>
            <RouteWithProps exact path="/" submissions={submissions} component={SubmissionList} />
            <RouteWithProps component={ErrorPage} />
          </Switch>
        </Fragment>
      </Provider>
    );
  }
}

RootContainer.propTypes = {
  store: PropTypes.shape({}),
  getFormSubmissions: PropTypes.func,
  getRandomFormSubmissions: PropTypes.func,
  submissions: PropTypes.arrayOf(PropTypes.shape({}))
};

RootContainer.defaultProps = {
  store: {},
  submissions: [],
  getFormSubmissions: f => f,
  getRandomFormSubmissions: f => f
};

const mapStateToProps = ({ submission: { data } }) => ({
  submissions: data
});

const mapDispatchToProps = dispatch => ({
  getFormSubmissions: bindActionCreators(getFormSubmissions, dispatch),
  getRandomFormSubmissions: bindActionCreators(getRandomFormSubmissions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
