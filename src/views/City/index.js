// City 智能组件
import React, { Component } from 'react';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import Utils from '../../utils/localStore';
import * as CITYNAME from '../../localItem';
import CityList from '../../components/CityList';

class City extends Component {
  render(){
    return (
      <div>
        <Header title='选择城市' history={this.props.history} />
        <CurrentCity cityName={this.props.userinfo.cityName} />
        <CityList changeFn={this.changeCity.bind(this)} />
      </div>
    )
  }
  changeCity(newCity){
    if(newCity == null){
      return;
    }
    const userinfo = this.props.userinfo;
    userinfo.cityName = newCity;
    // 更新 redux
    this.props.userInfoActions.update(userinfo);
    // 更新本地存储
    Utils.setItem(CITYNAME.CITYNAME, newCity);
    // 返回主界面
    this.props.history.replace('/');
  }
}

// 读取
function mapStateToProps (state) {
  return {
    userinfo: state.userinfo
  }
}

// 函数
function mapDispatchToProps (dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(City));