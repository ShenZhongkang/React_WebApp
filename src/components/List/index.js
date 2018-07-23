// List 木偶组件
import React, { Component } from 'react';
import Item from './Item';
import './style.less';

export default class List extends Component {
  render(){
    return (
      <div className='list-container'>
        {this.props.data.map((item, index) => {
          return <Item key={index} data={item} />
        })}
      </div>
    )
  }
}