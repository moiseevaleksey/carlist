import React, { Component } from 'react';
import {connect} from 'react-redux';

import List from './components/List';
import Input from './components/Input';
import Search from './components/Search';


class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <Search />
        <List />
      </div>
    );
  }
}

export default connect(
  state => ({
    state: state.cars.filter(car =>
      car.toLowerCase().includes(state.filterCars.toLowerCase())
    )
  }),
  dispatch => ({})
)(App);
