import  React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  findCar() {
    console.log(this.searchInput.value);
    this.props.onCarSearh(this.searchInput.value);
  }

  render() {
    return (
      <input
        onChange={this.findCar.bind(this)}
        ref={input => this.searchInput = input}>
      </input>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onCarSearh : (carName) => {
      dispatch({type: "FIND_CAR", carName : carName});
    }
  })
)(Search);
