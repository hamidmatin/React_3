import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from '../../components/nav/Nav';
import Posts from '../../components/posts/Posts';
import PostEdit from '../../components/posts/postList/PostEdit';
import Users from '../../components/users/Users';
import Todos from '../../components/todos/Todos';
import SubTodos from '../../components/todos/SubTodos';
import Home from '../../components/home/Home';
import Products from '../../components/products/Products';
import Comments from '../../components/comments/Comments';
import Albums from '../../components/albums/Albums';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />

          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/users' component={Users} />
            <Route path='/posts' exact>
              <Posts />
            </Route>
            <Route path='/posts/:id' component={PostEdit}/>
            <Route path='/todos' component={Todos} />
            <Route path='/todos/sub' component={SubTodos} />
            <Route path='/products' component={Products} />
            <Route path='/comments' component={Comments} />
            <Route path='/albums' component={Albums} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
