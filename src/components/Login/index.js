// Login 木偶组件
import React, { Component } from 'react';
import Header from '../../components/Header';
import './style.less';

export default class Login extends Component {
  render(){
    return (
      <div>
        <Header title='个人中心' />
        <div className='my-top'>
          <span className='my-avatar'>
            <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531230969984&di=5737a26d74e4ba16690a0545c4a2d4bc&imgtype=0&src=http%3A%2F%2Fu.thsi.cn%2Ffileupload%2Fdata%2FInput%2F2018%2F6427e39fc5d4752eba416a301b6bfaae.jpg' alt='avatar' />
          </span>
          <div className='my-info'>
            <span className='my-name'>太阳玄烨</span>
            <span className='my-desc'>这个人很懒，什么也没有留下.</span>
          </div>
        </div>
        <div className='my-gap'></div>
        <div className='my-collection'>
          <ul>
            <li>
              <span className='myinfo-item'>真实姓名：</span>
              <span className='myinfo-desc'>ShenZhongkang</span>
            </li>
            <li>
              <span className='myinfo-item'>现居城市：</span>
              <span className='myinfo-desc'>Beijing, CN</span>
            </li>
            <li>
              <span className='myinfo-item'>手机号码：</span>
              <span className='myinfo-desc'>1234567890</span>
            </li>
            <li>
              <span className='myinfo-item'>电子邮箱：</span>
              <span className='myinfo-desc'>123456789@gmail.com</span>
            </li>
            <li>
              <span className='myinfo-item'>最近订单：</span>
              <span className='myinfo-desc'>
                <a href='#'>Hello world.</a>
                <a href='#'>Hello world.</a>
                <a href='#'>Hello world.</a>
              </span>
            </li>
            <li>
              <span className='myinfo-item'>真实姓名：</span>
              <span className='myinfo-desc'>ShenZhongkang</span>
            </li>
            <li>
              <span className='myinfo-item'>现居城市：</span>
              <span className='myinfo-desc'>Beijing, CN</span>
            </li>
            <li>
              <span className='myinfo-item'>手机号码：</span>
              <span className='myinfo-desc'>1234567890</span>
            </li>
            <li>
              <span className='myinfo-item'>电子邮箱：</span>
              <span className='myinfo-desc'>123456789@gmail.com</span>
            </li>
            <li>
              <span className='myinfo-item'>最近订单：</span>
              <span className='myinfo-desc'>
                <a href='#'>Hello world.</a>
                <a href='#'>Hello world.</a>
                <a href='#'>Hello world.</a>
              </span>
            </li>
            <li>
              <span className='myinfo-item'>真实姓名：</span>
              <span className='myinfo-desc'>ShenZhongkang</span>
            </li>
            <li>
              <span className='myinfo-item'>现居城市：</span>
              <span className='myinfo-desc'>Beijing, CN</span>
            </li>
            <li>
              <span className='myinfo-item'>手机号码：</span>
              <span className='myinfo-desc'>1234567890</span>
            </li>
            <li>
              <span className='myinfo-item'>电子邮箱：</span>
              <span className='myinfo-desc'>123456789@gmail.com</span>
            </li>
            <li>
              <span className='myinfo-item'>最近订单：</span>
              <span className='myinfo-desc'>
                <a href='#'>Hello world.</a>
                <a href='#'>Hello world.</a>
                <a href='#'>Hello world.</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}