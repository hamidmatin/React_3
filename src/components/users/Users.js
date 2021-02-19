import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../loading/Loading';
import UserForm from './userForm/UserForm';
import UserList from './userList/UserList';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      userForm: {},
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
  updateUserListHandler = (newUser) => {
    console.log(newUser);
    const newState = { ...this.state };

    let index = newState.userList.findIndex((user) => {
      return user.id === newUser.id;
    });
    console.log(index);
    if (index === -1) {
      // For Add New User
      newState.userList.push(newUser);
    } else {
      // Update User
      newState.userList[index] = newUser;
    }
    this.setState(newState);
  };

  editUserHandler = (id) => {
    // console.log(id);
    const findUser = this.state.userList.find((user) => user.id === id);

    // console.log(findUser);

    this.setState({ ...this.state, userForm: findUser });
    // findUser.name = 'iiiiiiiiiiiiiii';
    // console.log(this.state.userList)
  };

  addNewUser = () => {
    const newUser = {
      id: uuidv4(),
      name: '',
      username: '',
      email: '',
    };

    console.log(newUser)
    this.setState({ ...this.state, userForm: newUser });
  };

  render() {
    return (
      <div className='mt-5'>
        {this.state.isLoading ? <Loading /> : null}

        <UserForm
          updateUser={this.updateUserListHandler}
          userInfo={this.state.userForm}
        />
        <div className='container mt-4'>
          <button
            className='btn btn-outline-primary ms-3'
            data-bs-toggle='collapse'
            data-bs-target='#user-form'
            onClick={this.addNewUser}
          >
            Add New User
          </button>
        </div>
        <UserList
          userList={this.state.userList}
          editUser={this.editUserHandler}
        />
      </div>
    );
  }
}
