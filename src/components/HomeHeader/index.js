// 木偶组件 HomeHeader
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput';
import './style.less';

export default class HomeHeader extends Component {
  render(){
    return (
      <div id='home-header' className='clear-fix'>
        <div className='home-header-left float-left'>
          <Link to='/city'>
            <span>{this.props.cityName}</span>
            &nbsp;
            <i className='icon-angle-down'></i>
          </Link>
        </div>
        <div className='home-header-right float-right'>
          <Link to='/user'>
          <i className='icon-user'></i>
          </Link>
        </div>
        <div className='home-header-middle'>
          <div className='search-container'>
            <i className='icon-search'></i>
            <SearchInput value='' enterHandle={this.enterHandle.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
  enterHandle(value){
    // react-router 的跳转
    this.props.history.push('/search/all' + encodeURIComponent(value));
  }
}