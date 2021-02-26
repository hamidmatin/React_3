import * as actionTypes from './actionTypes';


const rootReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_ALBUMS:
      const newState = { ...state };
      fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((result) => {
          newState.albums = result;
        });
      return newState;
    case actionTypes.DELETE_ALBUM:
      console.log(action);
      return {
        ...state,
        albums: state.albums.filter((album) => album.id !== action.id),
      };

    default:
      return state;
  }
};

export default rootReducer;