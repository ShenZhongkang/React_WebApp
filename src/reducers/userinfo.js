// 定义规则
import * as actionTypes from '../constants/userinfo';

// 定义初始值state
const initialState = {};

// 创建规则函数
export default function userinfo (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
      return action.data;
    default:
      return state;
  }
}