import './app3.css'
function App3(){
    return (
        <>  
            <div id="app">
                111
                <br />
                {/* 使用行内样式控制样式 */}
                <span style={{color:'red'}}>222</span>
                <br />
                {/* 使用类名控制 */}
                <span className='foot'>333</span>
            </div>
        </>
    )
}

export default App3