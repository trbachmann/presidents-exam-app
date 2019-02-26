import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPresidents } from '../thunks/fetchPresidents';
import { Loading } from '../Loading/Loading';
import { Error404 } from '../Error404/Error404';

export class App extends Component {
  componentDidMount() {
    this.props.fetchPresidents();
  }

  render() {
    const { isLoading, hasErrored } = this.props;
    return (
      <div className="App">
        <header className="App-header">
        <h1>Presidents</h1>
        { isLoading && <Loading /> }
        { (hasErrored !== '') && <Error404 /> }
        </header>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPresidents: () => dispatch(fetchPresidents()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
