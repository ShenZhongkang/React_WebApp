// SearchHeader 木偶组件
import React, { Component } from 'react';
import SearchInput from '../SearchInput';
import './style.less';

export default class SearchHeader extends Component {
  render(){
    return (
      <div id="search-header" className="clear-fix">
        <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
          <i className="icon-chevron-left"></i>
        </span>
        <div className="input-container">
          <i className="icon-search"></i>
          &nbsp;
          <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
        </div>
      </div>
    )
  }
  clickHandle(){
    window.history.back();
  }
  enterHandle(value){
    this.props.history.push('/search/all/' + encodeURIComponent(value));
  }
}