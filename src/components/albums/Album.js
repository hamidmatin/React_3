import React, { useContext } from 'react'
import {Link, useLocation} from 'react-router-dom'

import { BlogContext } from '../../context/BlogContext';
import { deleteAlbum } from '../../context/actions';

export default function Album(props) {
  const loaction = useLocation();

  const { dispatch } = useContext(BlogContext);

  const deleteAlbumHandler = (id)=>{
    dispatch(deleteAlbum(id))
  }

  return (
    <div className='w-50 p-3'>
        <div className='card shadow-sm '>
          <div className='card-body'>
            <h3 className='card-title text-center'>{props.name}</h3>
            <div>
              <span>user ID :</span>
              <span className='fw-bold'>{props.userId}</span>
            </div>
            <div>
              <span>ID :</span>
              <span className='fw-bold'>{props.id}</span>
            </div>
            <div>
              <span>Title :</span>
              <span className='fw-bold'>{props.title}</span>
            </div>
          </div>
          <div className='card-footer d-flex justify-content-end bg-white'>
              <Link
                className='btn btn-outline-primary me-2'
                to={`${loaction.pathname}/${props.id}`}
              >
                <i className='bi bi-pencil'></i>
              </Link>
              <button className='btn btn-outline-danger' 
                  onClick={()=>deleteAlbumHandler(props.id)}>
                <i className='bi bi-trash'></i>
              </button>
            </div>
        </div>
      </div>
  )
}
