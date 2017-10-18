const initState = [
  'Lada',
  'Audi',
  'Toyota',
  'Mazda',
  'Ferrari'
];

export default function carList(state = initState, action) {
  if (action.type === 'ADD_CAR') {
    return [
      ...state, action.carName
    ];
  }
  if (action.type === 'DELETE_CAR') {
    console.log(action.car);
  }
  return state;
}
