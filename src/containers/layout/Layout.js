import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from '../../components/nav/Nav';
import Posts from '../../components/posts/Posts';
import Users from '../../components/users/Users';
import Todos from '../../components/todos/Todos';
import SubTodos from '../../components/todos/SubTodos';
import Home from '../../components/home/Home';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />

          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/users' component={Users} />
            <Route path='/posts'>
              <Posts />
            </Route>
            <Route path='/todos' component={Todos} />
            <Route path='/todos/sub' component={SubTodos} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
