import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"; // 新增：用于组件挂载时触发请求
import { fetchChannelList } from "./store/modules/channelStore";

function Test4() {
  const dispatch = useDispatch();
  
  // 关键修复：从 Redux 的 channel 状态中获取数据（而非 posts）
  // 对应 channelStore 中的 state 结构：{ channelList, loading, error }
  const { channelList, loading, error } = useSelector((state) => state.channel);

  // 新增：组件挂载时触发异步请求（获取频道列表数据）
  useEffect(() => {
    dispatch(fetchChannelList()); // 调用异步 Action 请求数据
  }, [dispatch]); // 依赖项：dispatch 变化时重新执行（实际很少变化）

  // 加载中状态处理
  if (loading) {
    return <div id="Test4">加载频道列表中...</div>;
  }

  // 错误状态处理
  if (error) {
    return <div id="Test4">加载失败：{error}</div>;
  }

  // 无数据状态处理（可选，提升用户体验）
  if (channelList.length === 0) {
    return <div id="Test4">暂无频道数据</div>;
  }

  return (
    <div id="Test4">
      <h3>频道列表</h3>
      <ul>
        {/* 关键修复：循环 channelList（而非 posts） */}
        {channelList.map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test4;