// 定义针对规则的行为
import * as actionTypes from '../constants/userinfo';

// update 函数用来更新用户信息，这里就城市，不用default导出是因为不止一个函数
export function update (data) {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}
// 上面 data 相当于写 data: data