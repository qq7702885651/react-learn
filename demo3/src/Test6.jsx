import { useState } from "react"
//组件A
function A({getMsg}){
    const msgA = '组件A的数据'
    return (
        <>
            <div id="A">
                <button onClick={()=>getMsg(msgA)}>发送消息A</button>
            </div>
        </>
    )
}
//组件B
function B(props){
    console.log(props);
    
    return (
        <>
            <div>接收到组件A的值：{props.msg}</div>
        </>
    )
}
//父组件
function Test6(){
    const [msgA,setMsgA] = useState('')

    const getA = (msgA)=>{
        //console.log(msgA);
        setMsgA(msgA)
    }
    return (
        <>
            <div id="Test6">
                <A getMsg={getA}/>
                <B msg={msgA}/>
            </div>
        </>
    )
}


export default Test6