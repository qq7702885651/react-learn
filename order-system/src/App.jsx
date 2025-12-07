import { useState, useRef, useEffect } from 'react'
import './App.css'
import GoodsPage from './components/GoodsPage.jsx'
import MerchantPage from './components/MerchantPage.jsx'
import CommentPage from './components/CommentPage.jsx'

function App() {
  const menuList = ['点菜', '评价', '商家']

  const pageList = [
    <GoodsPage />,
    <CommentPage />,
    <MerchantPage />
  ]

  const [index, setIndex] = useState(0)

  // 用来定位每个 tab 的宽度和位置
  const menuRef = useRef([])

  const [lineStyle, setLineStyle] = useState({})

  useEffect(() => {
    if (menuRef.current[index]) {
      const el = menuRef.current[index]
      setLineStyle({
        width: `${el.offsetWidth}px`,
        left: `${el.offsetLeft}px`
      })
    }
  }, [index])

  return (
    <div id='app'>
      <div className='top-menu'>
        <ul className='menu'>
          {menuList.map((item, i) => (
            <li
              key={i}
              ref={el => menuRef.current[i] = el}
              className={index === i ? 'active' : ''}
              onClick={() => setIndex(i)}
            >
              {item}
            </li>
          ))}
          {/* 底部滑动指示条 */}
          <div className="indicator" style={lineStyle}></div>
        </ul>
      </div>

      <div className='main'>
        {pageList[index]}
      </div>
    </div>
  )
}

export default App
