// 这里是配置状态，生成状态管理仓库
import { createStore } from 'redux';
import rootReducer from '../reducers';

// 导出函数式，使用时可以直接运行即可生成store
export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState,
    // 可选条件，触发 redux-devtools
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}