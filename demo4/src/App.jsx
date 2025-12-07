import { useState } from 'react'
import Test1 from './Test1'
import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='app'>
        <Test4 />
      </div>
    </>
  )
}

export default App
