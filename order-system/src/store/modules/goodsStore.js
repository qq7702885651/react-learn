// channelSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 初始状态（可扩展更多字段）
const initialState = {
  goodsList: [],
  loading: false, // 加载状态（优化用户体验）
  error: null,    // 错误状态（异常处理）
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    // 发起请求时：设置加载中状态
    fetchGoodsListStart(state) {
      state.loading = true;
      state.error = null; // 重置错误状态
    },
    // 请求成功：保存数据
    setGoodsList(state, action) {
      state.goodsList = action.payload;
      state.loading = false;
    },
    // 请求失败：保存错误信息
    fetchGoodsListFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// 导出同步 Action
const { fetchGoodsListStart, setGoodsList, fetchGoodsListFail } = goodsSlice.actions;

// 异步 Action（优化错误处理和数据提取）
const fetchGoodsList = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchGoodsListStart()); // 触发加载状态
      const res = await axios.get("http://localhost:8080/goods");
      
      // 关键修复：axios 返回的响应数据在 res.data 中（原代码直接传 res 会导致数据错误）
      dispatch(setGoodsList(res.data));
    } catch (error) {
      // 错误处理：捕获网络错误或接口错误
      const errorMsg = error.response?.data?.message || error.message || "获取商品列表失败";
      dispatch(fetchGoodsListFail(errorMsg));
      console.error("商品列表请求失败：", error);
    }
  };
};

// 导出异步 Action 和 reducer
export { fetchGoodsList };
export default goodsSlice.reducer;