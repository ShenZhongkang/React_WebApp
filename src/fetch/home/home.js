// home页面的请求
import { get } from '../get';

// 中间 ad 区域
export function getAdData(){
  const result = get('/api/homead');
  return result;
}

// 下面 list 区域
export function getListData(city, page){
  const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page);
  return result;
}