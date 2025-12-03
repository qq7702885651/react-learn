function App3() {
  let isLogin = true


  return (
    <>
      <div id="app">
        { isLogin && <span>你好，管理员</span> }
        <br/> 
        { isLogin ? "用户已经登录":"未登录请重试" }
      </div>
    </>
  );
}

export default App3;