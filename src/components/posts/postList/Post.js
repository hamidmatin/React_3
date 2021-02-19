import React from 'react'
import {Link, useLocation} from 'react-router-dom'
export default function Post(props) {
  let loaction = useLocation();
  
  return (
    <div className='w-50 p-3'>
        <div className='card shadow-sm '>
          <div className='card-body'>
            <h3 className='card-title text-center'>{props.title}</h3>
            <div>
              <span>user id :</span>
              <span className='fw-bold'>{props.userId}</span>
            </div>
            <div>
              <span>id :</span>
              <span className='fw-bold'>{props.id}</span>
            </div>
            <div>
              <span>Body :</span>
              <span className='fw-bold'>{props.body}</span>
            </div>
          </div>
          <div className='card-footer d-flex justify-content-end bg-white'>
              <Link
                className='btn btn-outline-primary me-2'
                to={`${loaction.pathname}/${props.id}`}
              >
                <i className='bi bi-pencil'></i>
              </Link>
              <button className='btn btn-outline-danger'>
                <i className='bi bi-trash'></i>
              </button>
            </div>
        </div>
      </div>
  )
}
