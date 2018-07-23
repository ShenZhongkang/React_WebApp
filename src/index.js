import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// 引入入口路由
import AppRouter from './router/AppRouter';
// redux 最外层包裹容器
import { Provider } from 'react-redux';
// 本地存储
import localStore from './utils/localStore';
import * as localItem from './localItem';
// 生成 store
import configureStore from './store/configureStore';
// css 全局样式
import './static/css/common.less';
import './static/css/font.css';

// 先将预设的城市设置本地存储
localStore.setItem(localItem.CITYNAME, localItem.NAME);

// 创建 redux 的 store 对象
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
