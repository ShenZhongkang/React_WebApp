// 主要路由文件
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// 引入页面组件
import Home from '../views/Home';
import City from '../views/City';
import User from '../views/User';
import Search from '../views/Search';
import Detail from '../views/Detail';
import NotFound from '../views/NotFound';

// 主要路由，作为 AppRouter 的子集
export default class SubRouter extends Component {
  render(){
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/city' component={City} />
        <Route path='/user' component={User} />
        <Route path='/search/:type/:keyword?' component={Search} />
        <Route path='/detail/:id' component={Detail} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}