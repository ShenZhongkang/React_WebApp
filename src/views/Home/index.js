// Home 组件
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';

class Home extends Component {
  render(){
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} history={this.props.history} />
        <Category />
        <div style={{height: '15px'}}></div>
        <Ad />
        <List cityName={this.props.userinfo.cityName} />
      </div>
    )
  }
}

// 通过 redux 获取数据，state中的 userinfo 是一个对象
function mapStateToProps (state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

