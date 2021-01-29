import React, { Component } from 'react';

export default class UserForm extends Component {
  render() {
    return (
      <div className='card w-75 mx-auto'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label >Id:</label>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label >Name:</label>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label >user name:</label>
                <input type='email' className='form-control' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label >Email address:</label>
                <input type='email' className='form-control' />
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className='btn btn-outline-success'>Save</button>
        </div>
      </div>
    );
  }
}
