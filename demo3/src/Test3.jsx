function Son(props){
   console.log(props);
   
    return (
        <>
            <div>
                <p>this is son</p>
                <p>父组件传递的数据：{props.name}</p>
            </div>
        </>
    )
}



function Test3(){
    const name = 'this is app name'

    return (
        <>
            <div id="Test3">
                <Son name={name}/>
            </div>
        </>
    )
}

export default Test3