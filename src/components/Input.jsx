import  React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {

  addCar() {
    this.props.onAddCar(this.carNameInpt.value);
  }

  render() {
    return (
      <div>
        <input ref={input => this.carNameInpt = input}></input>
        <button onClick={this.addCar.bind(this)}>Add</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    carList: state
  }),
  dispatch => ({
    onAddCar : (carName) => {
      dispatch({type: "ADD_CAR", carName : carName});
    }
  })
)(Input);
