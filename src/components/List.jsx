import  React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
  deleteCar(a) {
    console.log( a.target.constructor.name);
    console.log(a.target.getAttribute('data-id'));

  }

  render() {
    return (
      <div>
        <ul>
            {this.props.state.map(({id, name}) =>
              <li key={id}
                onClick={this.deleteCar.bind(this)}
                ref={(li) => this.carToDelete = li }
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
    onCarDelete: (carName) => {
      dispatch({ type: 'DELETE_CAR', carName})
    }
  })
)(List);
