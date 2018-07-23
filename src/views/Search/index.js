// Search 智能组件
import React, { Component } from 'react';
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/List';

export default class Search extends Component {
  render(){
    const params = this.props.match.params;
    return (
      <div>
        <SearchHeader keyword={params.keyword} history={this.props.history} />
        <SearchList keyword={params.keyword} category={params.type} />
      </div>
    )
  }
}