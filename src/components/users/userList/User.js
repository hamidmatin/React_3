import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div className='w-25 p-3'>
        <div className='card shadow-sm h-100'>
          <div className='card-body'>
            <h3 className='card-title'>{this.props.name}</h3>
            <div>
              <span>id :</span>
              <span className='fw-bold'>{this.props.id}</span>
            </div>
            <div>
              <span>User Name :</span>
              <span className='fw-bold'>{this.props.username}</span>
            </div>
            <div>
              <span>Email :</span>
              <span className='fw-bold'>{this.props.email}</span>
            </div>
            
          </div>
          <div className='card-footer d-flex justify-content-end bg-white'>
              <button
                data-bs-toggle='collapse'
                data-bs-target='#user-form'
                className='btn btn-outline-primary me-2'
                onClick={() => {
                  this.props.editUser(this.props.id);
                }}
              >
                <i className='bi bi-pencil'></i>
              </button>
              <button className='btn btn-outline-danger'>
                <i className='bi bi-trash'></i>
              </button>
            </div>
        </div>
      </div>
    );
  }
}
