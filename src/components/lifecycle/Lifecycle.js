import React, { Component } from 'react';

export default class Lifecycle extends Component {
  constructor() {
    super();
    console.log('1. constructor');
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log('4. componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('7. componentDidUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('snapshot', snapshot);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);

    return nextState.counter < 10;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('6. getSnapshotBeforeUpdate');
    return 'set value for snapshot or return null'
  }
  
  static getDerivedStateFromProps(props, state){
    console.log('2. getDerivedStateFromProps');
    console.log('props', props);
    console.log('state', state);
    
    if(state.counter > 9){
      return {...state, counter: 9}
    }

    return null
  }

  counterHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log('3. render');
    return (
      <div className='card mb-5' onClick={this.counterHandler}>
        <div className='card-body text-center'>
          <h3>{this.props.message}</h3>
          <p>Counter = {this.state.counter}</p>
        </div>
      </div>
    );
  }
}
