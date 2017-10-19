import  React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
  constructor(props) {
    super(props);
    this.deleteCar = this.deleteCar.bind(this);
  }
  deleteCar() {

  }

  render() {
    console.log(this.props.state);
    return (
      <div>
        <ul>
            {this.props.state.map(({id, name}) =>
              <li key={id}>
                {name}
              </li>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    state: state.cars.filter(car => car.name.toLowerCase().includes(state.filterCars.toLowerCase()))
  }),
  dispatch => ({
    onCarDelete: (carName) => {
      dispatch({ type: 'DELETE_CAR', carName})
    }
  })
)(List);
