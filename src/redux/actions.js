import { ADD_NEW_PRODOCT } from '../redux/actionTypes'
const addNewProduct = (value) => {
  return {
    type: ADD_NEW_PRODOCT,
    value: value,
  };
};

export default addNewProduct;