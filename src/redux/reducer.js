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
};

const rootReducer = (state = initState, action) => {
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case 'add':
      return { products: [...state.products, action.value] };
    case 'delete':
      let newP = state.products.find((p) => p.id !== action.value);
      console.log(newP);
      return {
        products: newP,
      };

    default:
      return state;
  }
};

export default rootReducer;
