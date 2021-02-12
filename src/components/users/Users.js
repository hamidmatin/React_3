import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../loading/Loading';
import UserForm from './userForm/UserForm';
import UserList from './userList/UserList';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.data)
      .then((users) => {
        console.log(users);
        const newState = { ...this.state };
        newState.userList = users;
        newState.isLoading = false;
        this.setState(newState);
      });
  }
  addNewUserHandler = (newUser) => {
    console.log(newUser);
    const newState = { ...this.state };

    let index = newState.userList.findIndex((user) => {
      return user.id === newUser.id;
    });
    console.log(index);
    if (index === -1) {
      newState.userList.push(newUser);
      this.setState(newState);
    } else alert('sdsds');
  };
  render() {
    return (
      <div className='mt-5'>
        {this.state.isLoading ? <Loading /> : null}
        <UserForm addNewUser={this.addNewUserHandler} />
        <UserList userList={this.state.userList} />
      </div>
    );
  }
}
