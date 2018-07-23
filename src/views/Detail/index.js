// Detail 智能组件
import React, { Component } from 'react';
import Header from '../../components/Header';
import Info from './subpage/Info';
import Comment from './subpage/Comment';

export default class Detail extends Component {
  render(){
    const id = this.props.match.params.id;
    return (
      <div>
        <Header title='商户详情' history={this.props.history} />
        <Info id={id} />
        <Comment id={id} />
      </div>
    )
  }
}