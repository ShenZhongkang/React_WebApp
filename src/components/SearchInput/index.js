// SearchInpur 木偶组件
import React, { Component } from 'react';
import './style.less';

export default class SearchInput extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    }
  }
  render(){
    return (
      <input
        className='search-input'
        type='text'
        placeholder='请输入关键字'
        onChange={this.changeHandle.bind(this)}
        onKeyUp={this.keyUpHandle.bind(this)}
        value={this.state.value}
      />
    )
  }
  componentDidMount(){
    // 默认值
    this.setState({
      value: this.props.value || ''
    });
  }
  changeHandle(e){
    // 监控变化
    this.setState({
      value: e.target.value
    });
  }
  keyUpHandle(e){
    // 监控 enter 事件
    if(e.KeyCode !== 13){
      return;
    }
    this.props.enterHandle(e.target.value);
  }
}