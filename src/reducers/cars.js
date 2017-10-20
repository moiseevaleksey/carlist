const initState = [{
        id: 1,
        name: 'Lada'
    },
    {
        id: 2,
        name: 'Audi'
    },
    {
        id: 3,
        name: 'Toyota'
    },
    {
        id: 4,
        name: 'Mazda'
    },
    {
        id: 5,
        name: 'Ferrari'
    }
];

export default function carList(state = initState, action) {
  if (action.type === 'ADD_CAR') {
    let maxId = state.reduce((a, b) => {
      return (a.id > b.id) ? a.id : b.id;
    });
    return [ ...state,
      { id : maxId + 1, name : action.carName}
    ];
  } else if (action.type === 'DELETE_CAR') {
    let newState = state.filter((car) => car.id !== action.id);
    return newState;
  }
  return state;
}
