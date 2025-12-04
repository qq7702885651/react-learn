import { createContext, useContext } from 'react'
 const ctx = createContext()

function A(){
    return (
        <>
        <div>
            this is component B
            <br />
            <B/>
        </div>
        </>
    )
}

function B(){
    const msg = useContext(ctx)
    return (
        <>
            <div>
                this is Commponent
                <br />
                { msg }
            </div>
        </>
    )
}


function Test7(){
    const msg = "公共数据"
   
    return (
        <>
            <div id="Test7">
                <ctx.Provider value={msg}>
                    this is App
                     <A/>
                </ctx.Provider>
               
            </div>
        </>
    )
}
export default Test7