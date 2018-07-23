// 智能组件 Ad
import React, { Component } from 'react';
import { getAdData } from '../../../fetch/home/home';
import HomeAd from '../../../components/HomeAd';

export default class Ad extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  render(){
    return (
      <div>
        <HomeAd data={this.state.data} />
      </div>
    )
  }
  componentDidMount(){
    const result = getAdData();
    result.then(res => {
      return res.json();
    }).then(json => {
      const data = json;
      if(data.length){
        this.setState({
          data: data
        });
      }
    }).catch(ex => {
      // deal err
    })
  }
}