import {  useDispatch, useSelector } from "react-redux";
import { increment, decrement, addToNum } from "./store/modules/counterstore";
function Test3() {
    const { count } = useSelector(state => state.counter);
    
    const dispatch = useDispatch();
  return (
    <div id="Test3">
        <h3>Test3组件</h3>
        <button onClick={()=>dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(addToNum(20))}>+20</button>
        <button onClick={()=>dispatch(addToNum(-20))}>-20</button>
    </div>
  )
}

export default Test3;