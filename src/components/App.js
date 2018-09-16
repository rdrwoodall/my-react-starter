import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            APP CONTAINER
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: false // TODO: tie loading property to some initial state that will be updated async
  };
}

export default connect(mapStateToProps)(App);
