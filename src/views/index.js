// 智能组件 - App
import React, { Component } from 'react';
// redux 中的方法
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// react-router 4.x 的方法
import { withRouter } from 'react-router-dom';
// 本地存储
import localStore from '../utils/localStore';
import * as localItem from '../localItem';
import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends Component {
  render(){
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
  componentDidMount(){
    // 组件挂载完成时候，先读取本地存储的城市，如果未空，设为北京
    var cityName = localStore.getItem(localItem.CITYNAME);
    if(cityName == null){
      cityName = '北京';
    }
    // 然后把读取到的城市设置到全局的状态信息里面
    this.props.userInfoActions.update({
      cityName: cityName
    });
  }
}

// 这是读全局中状态的： 读取数据，把全局状态 state 读取为 props 属性
function mapStateToProps (state) {
  return {}
}

// 这是读全局中方法的： 改变数据
function mapDispatchToProps (dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
  }
}

// 导出，router 4.x 需要加 withRouter 包裹
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));