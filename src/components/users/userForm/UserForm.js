import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      user:{
        id: '',
        name: '',
        username: '',
        email: '',
      }
    };
  }

  // idChangeHandler = (e) => {
  //   console.log(e.target.value);

  //   const newState = { ...this.state };
  //   newState.user.id = e.target.value;

  //   this.setState(newState);
  // };

  nameChangeHandler = (e) => {
    console.log(e.target.value);

    const newState = { ...this.state };
    newState.user.name = e.target.value;

    this.setState(newState);
  };
  usernameChangeHandler = (e) => {
    console.log(e.target.value);

    const newState = { ...this.state };
    newState.user.username = e.target.value;

    this.setState(newState);
  };
  emailChangeHandler = (e) => {
    console.log(e.target.value);

    const newState = { ...this.state };
    newState.user.email = e.target.value;

    this.setState(newState);
  };

  saveUser = () => {
    this.props.updateUser(this.state.user);
    // this.setState({
    //   user: {
    //     id: uuidv4(),
    //     name: '',
    //     username: '',
    //     email: '',
    //   },
    // });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('Prev Props', prevProps);
    console.log('Props', this.props);

    if (this.props.userInfo !== prevProps.userInfo)
      this.setState({ ...this.state, user: this.props.userInfo });
  }

  render() {
    return (
      <div className='card w-75 mx-auto collapse' id='user-form'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>Id:</label>
                <input
                  type='text'
                  className='form-control'
                  value={this.state.user.id}
                  readOnly
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>Name:</label>
                <input
                  type='text'
                  className='form-control'
                  onChange={this.nameChangeHandler}
                  value={this.state.user.name}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>user name:</label>
                <input
                  type='email'
                  className='form-control'
                  onChange={this.usernameChangeHandler}
                  value={this.state.user.username}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>Email address:</label>
                <input
                  type='email'
                  className='form-control'
                  onChange={this.emailChangeHandler}
                  value={this.state.user.email}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <button
            data-bs-toggle='collapse'
            data-bs-target='#user-form'
            className='btn btn-outline-success'
            onClick={() => this.props.updateUser(this.state.user)}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
