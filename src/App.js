import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MY_PROJECT_NAME, { MY_NAME } from './impoer-export-module/my-constant';

import Student from './components/student/Student';

class App extends Component {
  constructor() {
    super();

    this.state = {
      studentList: [
        {
          firstName: 'Amir Hossein',
          lastName: 'Salighe Dar',
        },
        {
          firstName: 'Amir Mehdi',
          lastName: 'Vaez',
        },
        {
          firstName: 'Hassan',
          lastName: 'Beiki',
        },
        {
          firstName: 'Navid',
          lastName: 'Farahmand',
        },
      ],
      toggleShow: true,
    };
  }
  prompt = `Teacher is : ${MY_NAME}`;

  clickHandler = () => {
    console.log(this.state.studentList);
    const newStudentList = [...this.state.studentList];
    newStudentList[0].firstName = 'Mohammad';
    newStudentList[0].lastName = 'Nazemi';

    this.setState(newStudentList);
  };

  toggleListHandler = (e) => {
    console.log(e)
    const newState = { ...this.state };
    newState.toggleShow = !newState.toggleShow;

    this.setState(newState);
  };

  testEventParameter = (message, e) => {
    console.log(message);
    console.log(e);
  };

  deleteStudent = (index) => {
    console.log(index);

    const newState = {
      ...this.state
    }
    newState.studentList.splice(index, 1);

    // console.log(newState)
    this.setState(newState);
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>{MY_PROJECT_NAME}</h2>
          <p>{this.prompt}</p>
          <div className='btn-group'>
            <button onClick={this.clickHandler} className='btn btn-primary'>
              Change Student
            </button>
            <button onClick={this.toggleListHandler} className='btn btn-primary'>
              Toggle List
            </button>
            <button
              className='btn btn-warning'
              onClick={(e) => {
                this.testEventParameter('Call by func', e);
              }}
            >
              Test Event with parameter
            </button>
            <button
              className='btn btn-danger'
              onClick={this.testEventParameter.bind(this, 'Call by Bind')}
            >
              Test Event with parameter
            </button>
          </div>
          <hr />
          {this.state.toggleShow
            ? this.state.studentList.map((student, index) => (
                <Student
                  key={index}
                  id={index}
                  firstName={student.firstName}
                  lastName={student.lastName}
                  deleteStudentHandler={this.deleteStudent}
                />
              ))
            : null}
          {/* <Student firstName="Amir Hossein" lastName="Salighe Dar"/>
          <Student firstName="Amir Mehdi" lastName="Vaez"/>
          <Student firstName="Hassan" lastName="Beiki"/>
          <Student firstName="Navid" lastName="Farahmand"/> */}
        </header>
      </div>
    );
  }
}

export default App;
