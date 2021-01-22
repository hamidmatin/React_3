import React, { Component } from 'react';
import './Student.css';

export default class Student extends Component {
    
  render() {
    return (
      <div className="student-row">
        <span className="student-title">First Name :</span><span>{this.props.firstName}</span>
        <span className="student-title">Last Name :</span><span>{this.props.lastName}</span>
      </div>
    );
  }
}
