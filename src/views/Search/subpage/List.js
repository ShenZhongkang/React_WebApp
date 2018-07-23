// List of Search 智能组件
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';
import { getSearchData } from '../../../fetch/search/search';

// 初始化一个组件的 state
const initialState = {
  data: [],
  hasMore: false,
  isLoadingMore: false,
  page: 0
}

class SearchList extends Component {
  constructor(){
    super();
    this.state = initialState;
  }
  render(){
    return (
      <div>
        {
          this.state.data.length
          ? <ListComponent data={this.state.data}/>
          : <div>{/* 加载中... */}</div>
        }
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn={this.loadMoreData.bind(this)}/>
          : ''
        }
      </div>
    )
  }
  // 获取首页数据
  componentDidMount(){
    this.loadFirstPageData();
  }
  // 函数
  loadFirstPageData(){
    const cityName = this.props.userinfo.cityName;
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = getSearchData(0, cityName, category, keyword);
    this.resultHandle(result);
  }
  // 加载更多数据
  loadMoreData(){
    // 记录状态
    this.setState({
      isLoadingMore: true
    });
    const cityName = this.props.userinfo.cityName;
    const page = this.state.page;
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = getSearchData(page, cityName, category, keyword);
    this.resultHandle(result);
    // 更新状态
    this.setState({
      isLoadingMore: false
    });
  }
  // 处理数据
  resultHandle(result){
    // 增加 page 计数
    const page = this.state.page;
    this.setState({
      page: page + 1
    });
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
  // 处理重新搜索
  componentDidUpdate(prevProps, prevState){
    const keyword = this.props.keyword;
    const category = this.props.category;

    // 搜索条件完全相同时，忽略
    if(keyword === prevProps.keyword && category === prevProps.category){
      return;
    }
    // 重置 state
    this.setState(initialState);
    // 重新加载数据
    this.loadFirstPageData();
  }
}

// 读取
function mapStateToProps (state) {
  return {
    userinfo: state.userinfo
  }
}

// 方法
function mapDispatchToProps (dispatch) {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchList));