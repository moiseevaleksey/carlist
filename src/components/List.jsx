import  React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
  deleteCar(id) {
    this.props.onCarDelete(id)
  }

  render() {
    return (
      <div>
        <ul>
            {this.props.state.map(({id, name}) =>
              <li key={id}
                onClick={() => this.deleteCar(id)}
                data-id={id}>
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
    onCarDelete: (id) => {
      dispatch({ type: 'DELETE_CAR', id})
    }
  })
)(List);
