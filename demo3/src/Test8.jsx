import { useEffect,useState } from "react";
const URL = "http://geek.itheima.net/v1_0/channels";
function Test8() {
    const [list,setList] = useState([]);
    useEffect(() => {        async function fetchData() {
            const response = await fetch(URL);
            const data = await response.json();
            setList(data.data.channels);

            console.log(data);
        }
        fetchData();
    }, []);


    return <div>
        <h1>Test8</h1>
        <ul>
            {list.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
        
        </div>;
}

export default Test8;