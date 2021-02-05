import React from 'react'

export default function Post(props) {
  return (
    <div className='w-50 p-3'>
        <div className='card shadow-sm '>
          <div className='card-body'>
            <h3 className='card-title text-center'>{props.title}</h3>
            <div>
              <span>user id :</span>
              <span className='fw-bold'>{props.userid}</span>
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
        </div>
      </div>
  )
}
