import { useRef } from 'react'

function Test2() {
    const inputRef = useRef(null)

    const showDom = (e) =>{
        console.dir(inputRef.current.value);
        
    }

    return (
        <>
        <div id="test2">
            <input type="text" ref={inputRef}/>
            <button onClick={(e)=>showDom(e)}>获取dom</button>
        </div>
        </>
    )
}

export default Test2