const addNewProduct = () => {
  return {
    type: 'add',
    value: {
      id: 3,
      name: 'Product 3',
      price: 4545646,
    },
  };
};

export default addNewProduct;