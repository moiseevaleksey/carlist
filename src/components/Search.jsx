import  React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  findCar() {
    this.props.onCarSearh(this.searchCarInput.value);
  }

  render() {
    return (
      <input
        onChange={this.findCar.bind(this)}
        ref={input => this.searchCarInput = input}>
      </input>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onCarSearh : (carName) => {
      dispatch({type: 'FIND_CAR', carName: carName});
    }
  })
)(Search);
