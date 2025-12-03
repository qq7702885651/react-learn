
function App() {
  const msg = "Hello React"
  const getName = () =>{
    return 'Jim'
  }
  //获取时间
  const getDate = () =>{
    return Date.now()
  }

  return (
    <>
      <div>
        <h1>{ msg }</h1>
      </div>
      
      <div className="card">
        { getName() }
      </div>
      <p className="read-the-docs">
        { getDate() }
      </p>
    </>
  )
}

export default App
