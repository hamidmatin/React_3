import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div className='w-25 p-3'>
        <div className='card shadow-sm '>
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
        </div>
      </div>
    );
  }
}
