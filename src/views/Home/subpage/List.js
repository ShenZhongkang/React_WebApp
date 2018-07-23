// List 智能组件
import React, { Component } from 'react';
import { getListData } from '../../../fetch/home/home';
import utils from '../../../utils/localStore';
import * as CITYNAME from '../../../localItem';
import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';
import './style.less';

export default class List extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 1
    }
  }
  render(){
    return (
      <div>
        <h2 className='home-list-title'>猜你喜欢</h2>
        {
          this.state.data.length
          ? <ListComponent data={this.state.data} />
          : <div>{ /* Loading */ }</div>
        }
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn={this.loadMoreData.bind(this)} />
          : ''
        }
      </div>
    )
  }
  // 组件加载就获取首页数据
  componentDidMount(){
    this.loadFirstPageData();
  }
  // 获取数据
  loadFirstPageData(){
    const cityName = utils.getItem(CITYNAME.CITYNAME);
    const result = getListData(cityName, 0);
    this.resultHandle(result);
  }
  // 处理数据
  resultHandle(result){
    result.then(res => {
      return res.json();
    }).then(json => {
      const hasMore = json.hasMore;
      const data = json.data;
      this.setState({
        hasMore: hasMore,
        data: this.state.data.concat(data)
      });
    }).catch(ex => {
      // deal err
    })
  }
  // 增加页面数据
  loadMoreData(){
    // 记录状态
    this.setState({
      isLoadingMore: true
    });
    const cityName = this.props.cityName;
    const page = this.state.page;
    const result = getListData(cityName, page);
    this.resultHandle(result);
    // 增加 page 计数
    this.setState({
      page: page + 1,
      isLoadingMore: false
    });
  }
}