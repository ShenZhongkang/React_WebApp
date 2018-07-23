// 合并规则，可能有多个规则，合并起来
import { combineReducers } from 'redux';
import userinfo from './userinfo';

// combineReducers，这里的 userinfo 相当于 userinfo: userinfo
export default combineReducers({
  userinfo
});