import * as actionTypes from '../redux/actionTypes';
const initState = {
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 1254,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 45646,
    },
  ],
  comments: [],
};

const rootReducer = (state = initState, action) => {
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case actionTypes.ADD_NEW_PRODOCT:
      return { products: [...state.products, action.value] };
    case 'delete':
      let newP = state.products.find((p) => p.id !== action.value);
      console.log(newP);
      return {
        products: newP,
      };

    case actionTypes.LOAD_ALL_COMMENTS:
      const newState = { ...state };
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((result) => {
          newState.comments = result;
        });
        console.log(newState)
      return newState;

    case actionTypes.DELETE_COMMENT: 
      console.log(action)
      return {...state, comments: state.comments.filter(comment => comment.id !== action.id)};
    default:
      return state;
  }
};

export default rootReducer;
