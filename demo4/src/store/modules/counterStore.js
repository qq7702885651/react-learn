import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  //初始化状态数据
  initialState: { count: 0 },
  //定义reducers及其方法
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    addToNum(state, action) {
      state.count += action.payload;
    }
    
  },
});
//导出action和reducer
const { increment, decrement, addToNum } = counterSlice.actions;
//导出reducer
const counterReducer = counterSlice.reducer;
//分别导出
export { increment, decrement, addToNum };
export default counterReducer;
