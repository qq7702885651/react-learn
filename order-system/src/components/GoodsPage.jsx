import { useState } from 'react'
import '../assets/css/GoodsPage.css'

function GoodsPage() {
    const menuList = ['炸鸡', '汉堡', '饮料', '套餐'];
    const [current, setCurrent] = useState(0);
    

    const [goodsList,setGoodsList] = useState([
        { name: '秘制炸鸡', price: 18, count: 0 },
        { name: '经典汉堡', price: 15, count: 0 },
        { name: '可乐', price: 5, count: 0 },
        { name: '双人套餐', price: 45, count: 0 },
        { name: '薯条', price: 8, count: 0 },
        { name: '鸡翅', price: 12, count: 0 },
        { name: '奶茶', price: 6, count: 0 },
        { name: '家庭套餐', price: 80, count: 0 },
    ]);

    const handleCount = (index) => {
        setGoodsList(prevGoodsList => {
            const newGoodsList = [...prevGoodsList];
            newGoodsList[index].count++;
            return newGoodsList;
        });
    }
    const removeCount = (index) => {
        setGoodsList(prevGoodsList => {
            const newGoodsList = [...prevGoodsList];
            if (newGoodsList[index].count > 0) {
                newGoodsList[index].count--;
            }
            return newGoodsList;
        });
    }

    return (
        <div id='goodsPage'>
            {/* 左侧分类 */}
            <div className='goodsPage-left'>
                <ul className='goodsPage-left-menu'>
                    {menuList.map((item, index) => (
                        <li
                            key={index}
                            className={current === index ? 'active' : ''}
                            onClick={() => setCurrent(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* 右侧商品 */}
            <div className='goodsPage-right'>
                {goodsList.map((item, index) => (
                    <div key={index} className='goodsPage-right-item'>
                        <div className='item-info'>
                            <h3>{item.name}</h3>
                            <p>￥{item.price}</p>
                        </div>
                        <div className='item-action'>
                            <button className='decrease' onClick={()=>removeCount(index)}>-</button>
                            <span className='count'>{item.count}</span>
                            <button className='increase' onClick={()=>handleCount(index)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GoodsPage
