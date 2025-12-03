function App4() {
  const getArticleType = (typeNum) =>{
    switch(typeNum){
        case 0:
            return <div>我是无图文章</div>
        case 1:
            return <div>单图文示例</div>
        case 2:
            return <div>三行图文示例</div>
    }
  }

  return (
    <>
      <div id="app">
        { getArticleType(2) }
      </div>
    </>
  );
}

export default App4;