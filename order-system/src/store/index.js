import {configureStore} from '@reduxjs/toolkit';
import goodsReducer from './modules/goodsStore';
import userReducer from './modules/userStore'; // 变量名统一为 xxxReducer（规范）

const store = configureStore({
  reducer: {
    goods: goodsReducer, // 商品数据：state.goods
    user: userReducer, // 用户数据：state.user
  },
});

export default store;