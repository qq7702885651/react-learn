import { useState } from 'react';

function App5() {
//   const [form, setForm] = useState({
//     id: 0,
//     name: ''
//   });

//   const f1 = () => {
//     alert(`你好, ${form.name}`);
//   };
//   //传递事件参数
//   const handleInputChange = (e) => {
//     console.log(e);
    
//     setForm({
//       ...form,
//       name: e.target.value
//     });
//   };

    //传递自定义参数
//   const handleClick = (name) =>{
//     console.log(name);
    
//   }
    //传递自定义参数且带事件参数
    const handleClick = (name,e) =>{
        console.log(name);
        console.log(e);
        
        
    }
  return (
    <>
      <div id="app">
        {/* <input
          value={form.name}
          onChange={handleInputChange}
          type="text"
          placeholder="在此输入你的姓名"
        />
        <button onClick={f1}>点击输出你的信息</button> */}

        {/*
        第一种写法
         <button onClick={() => handleClick('jack')}>点我试试</button> */}

        <button onClick={(e) => handleClick('jack',e)}>点我试试</button>

      </div>
    </>
  );
}

export default App5;