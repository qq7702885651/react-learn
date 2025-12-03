import { useState } from "react"

function App2() {
    let [count,setCount] = useState(0)

    const handleClick = () =>{
        setCount(count + 1)
    }

    //复杂对象的修改
    const [form,setForm] = useState({name:'Tom'})

    const handleClick2 = () =>{
        setForm({
            ...form,
            name: "张三"
        })
    }

  return (
    <>
      <div id='app'>
        <button onClick={handleClick}>{ count }</button><br />
        <button onClick={handleClick2}>原始值:{form.name}  </button>
      </div>
    
    </>
  )
}

export default App2
