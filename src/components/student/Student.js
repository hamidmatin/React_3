import React, { Component } from 'react';
import './Student.css';

export default class Student extends Component {
    constructor(){
        super();
        this.state = {
            hide : ''
        }
    }
    hideStudentHandler=()=>{
        this.setState({hide: 'hide'})
    }
  render() {
    return (
      <div className={`student-row ${this.state.hide}`} onClick={this.hideStudentHandler}>
        <span className="student-title">First Name :</span><span>{this.props.firstName}</span>
        <span className="student-title">Last Name :</span><span>{this.props.lastName}</span>
      </div>
    );
  }
}
