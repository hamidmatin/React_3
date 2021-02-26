import * as actionTypes from './actionTypes';

export const loadAllAlbums = () =>{
  return { type : actionTypes.LOAD_ALL_ALBUMS }
}

export const addNewAlbum = (album) =>{
  return { type : actionTypes.ADD_NEW_ALBUM, album }
}

export const deleteAlbum = (id) =>{
  return { type : actionTypes.DELETE_ALBUM, id }
}

export const editAlbum = (id) =>{
  return { type : actionTypes.EDIT_ALBUM, id }
}
