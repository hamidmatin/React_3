import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MY_PROJECT_NAME, { MY_NAME } from './impoer-export-module/my-constant';

import Student from './components/student/Student';

class App extends Component {
  
  prompt = `Teacher is : ${MY_NAME}`;

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>{MY_PROJECT_NAME}</h2>
          <p>{this.prompt}</p>
          <hr />
          <Student firstName="Amir Hossein" lastName="Salighe Dar"/>
          <Student firstName="Amir Mehdi" lastName="Vaez"/>
          <Student firstName="Hassan" lastName="Beiki"/>
          <Student firstName="Navid" lastName="Farahmand"/>
        </header>
      </div>
    );
  }
}

export default App;
