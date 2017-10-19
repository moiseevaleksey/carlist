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
            {this.props.state.map((carName, index) =>
              <li key={index}>
                <input type="checkbox" name="deleteItem" value={index}/>
                {carName}
              </li>)}
        </ul>
        <button type="button" onClick={this.deleteCar}>Delete Selected Items</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    state: state.cars.filter(car => car.toLowerCase().includes(state.filterCars.toLowerCase()))
  }),
  dispatch => ({
    onCarDelete: (car) => {
      dispatch({ type: 'DELETE_CAR', car})
    }
  })
)(List);
