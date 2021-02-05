import React, { Component } from 'react';
import UserForm from './userForm/UserForm';
import UserList from './userList/UserList';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      userList: [
        {
          id: '1',
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'incere@april.biz',
        },
        {
          id: '2',
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'hanna@melissa.tv',
        },
      ],
    };
  }

  addNewUserHandler = (newUser) => {
    console.log(newUser);
    const newState = { ...this.state };

    let index = newState.userList.findIndex((user)=>{
      return user.id === newUser.id
    })
    console.log(index)
    if(index === -1)
      {newState.userList.push(newUser);
        this.setState(newState);
      }
    else
      alert('sdsds')
  };
  render() {
    return (
      <div className='mt-5'>
        <UserForm addNewUser={this.addNewUserHandler} />
        <UserList userList={this.state.userList} />
      </div>
    );
  }
}
