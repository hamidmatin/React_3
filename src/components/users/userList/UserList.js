import React, { Component } from 'react'
import User from './User'

export default class UserList extends Component {
  
  render() {
    
    return (
      <div className='container d-flex flex-wrap mt-4'>
        {this.props.userList.map(user => <User key={user.id} {...user} editUser={this.props.editUser}/>)}
      </div>
    )
  }
}
