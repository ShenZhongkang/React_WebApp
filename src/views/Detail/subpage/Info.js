// Info 智能组件
import React, { Component } from 'react';
import { getInfoData } from '../../../fetch/detail/detail';
import DetailInfo from '../../../components/DetailInfo';

export default class Info extends Component {
  constructor(){
    super();
    this.state = {
      info: false
    }
  }
  render(){
    return (
      <div>
        {
          this.state.info
          ? <DetailInfo data={this.state.info} />
          : ''
        }
      </div>
    )
  }
  // 获取商品信息
  componentDidMount(){
    this.getInfo();
  }
  getInfo(){
    const id = this.props.id;
    const result = getInfoData(id);
    result.then(res => {
      return res.json();
    }).then(json => {
      this.setState({
        info: json
      });
    }).catch(ex => {
      // deal err
    })
  }
}