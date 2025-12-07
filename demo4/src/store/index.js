import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './modules/counterstore';
import channelReducer from './modules/channelStore'; // 变量名统一为 xxxReducer（规范）

const store = configureStore({
  reducer: {
    counter: counterReducer, // 计数器数据：state.counter
    channel: channelReducer  // 频道数据：state.channel（与组件取值对应）
  },
});

export default store;