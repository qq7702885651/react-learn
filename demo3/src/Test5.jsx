//子传父的使用
import { useState } from 'react'

function Son({onGetSonMsg}){
    const msg = "Son of Mssage"
    
   
    return (
        <>
            <div id="son">
                this is son
              <button onClick={()=>onGetSonMsg(msg)}>发送消息</button>
            </div>
        </>
    )
}



function Test5(){
    const [msg,setMsg] = useState('')

    const getmsg = (msg) =>{
        console.log(msg);
        setMsg(msg)
    }

    return (
        <>
            <div id="Test3">
                <h1>{msg}</h1>
                <Son onGetSonMsg={getmsg}/>
            </div>
        </>
    )
}

export default Test5