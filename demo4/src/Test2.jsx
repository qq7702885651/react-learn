import { useState } from "react"
function Test2() {
    const hookTest = () => {
        const [show,setShow] = useState(true)
        return {show,setShow}
    }
    // 使用自定义hook
    const {show,setShow} = hookTest()


    return (
        <div id="Test2">
              {show &&  <p>Hi,I'm Test2</p>}
              <button onClick={()=>setShow(!show)}>点我试试</button>
        </div>
    )
   
}

export default Test2