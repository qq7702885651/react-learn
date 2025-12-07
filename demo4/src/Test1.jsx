import { useEffect,useState } from 'react'
function Son(){
   useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("定时器执行中")
        },1000)
        
        return ()=>{
            clearTimeout(timer)
            console.log("定时器已清除")
        }
    },[])
    return <div>this is son</div>
}



function Test1() {
    const [showSon,setShowSon]=useState(true)



    return (
        <>
            <div id="Test1">
                {showSon && <Son/>}
                <button onClick={()=>setShowSon(false)}>结束计时器</button>
            </div>
        </>
    )
}

export default Test1