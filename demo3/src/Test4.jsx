//插槽的使用
function Son(props){
   console.log(props);
   
    return (
        <>
            <div>
                <p>this is son</p>
                <p>父组件传递的数据：{props.name}</p>
                {props.children}
            </div>
        </>
    )
}



function Test4(){
    const name = 'this is app name'

    return (
        <>
            <div id="Test3">
                <Son name={name}>
                    <h1>我是插槽的数据</h1>
                </Son>
            </div>
        </>
    )
}

export default Test4