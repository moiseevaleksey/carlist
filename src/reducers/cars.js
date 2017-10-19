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
        id: 9999999,
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
  }
  return state;
}
