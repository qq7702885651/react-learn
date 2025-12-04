import { useState,useRef } from 'react'
function Test1() {
  const [input, setInput] = useState('');

  const handleShow = (e) =>{
    alert(input);
  }

  return (
    <>
      <div id='Test1'>
        <input 
        type="text" 
        value={input}  
        onChange={(e)=>setInput(e.target.value)}
        />
        <br />
        <button onClick={(e)=>handleShow(e)}>显示结果</button>
      </div>
    </>
  )
}

export default Test1
