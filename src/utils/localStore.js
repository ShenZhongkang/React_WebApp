// 两个函数，分别是对本地 localStorage 的存储和读取
export default {
  getItem: function (key) {
    return localStorage.getItem(key);
  },
  setItem: function (key, value) {
    localStorage.setItem(key, value);
  }
}