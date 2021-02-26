import * as actionTypes from '../redux/actionTypes'

const addNewProduct = (value) => {
  return {
    type: actionTypes.ADD_NEW_PRODOCT,
    value: value,
  };
};

export default addNewProduct;

export const loadAllComments = () =>{
  return { type : actionTypes.LOAD_ALL_COMMENTS }
}

export const deleteComment = (id) =>{
  return { type: actionTypes.DELETE_COMMENT, id}
}