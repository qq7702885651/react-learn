// src/Comment.jsx 实现哔哩哔哩评论效果

import { useState } from 'react'
import './assets/comment.css'

function Comment() {
    const [comment, setComment] = useState([
        { id: 1, name: '张三', text: '这个视频真好看！', time: '2025-12-01 07:00:00', like: 102 },
        { id: 2, name: '李四', text: '学习了，感谢分享！', time: '2025-12-03 09:00:00', like: 150 },
        { id: 3, name: '王五', text: '哈哈哈，笑死我了！', time: '2025-12-02 10:00:00', like: 10 },
        { id: 4, name: '小明', text: '画质太棒了！', time: '2025-12-01 14:01:00', like: 103 },
        { id: 5, name: '赵六', text: '期待下集！', time: '2024-12-01 00:05:00', like: 1000 },
    ])

    const [userInput, setUserInput] = useState('')

    // 添加评论
    const addComment = () => {
        if (!userInput.trim()) return
        
        const newComment = {
            id: Date.now(),
            name: '匿名用户',
            text: userInput,
            time: new Date().toLocaleString(),
            like: 0
        }

        setComment([newComment, ...comment]) // 新评论置顶
        setUserInput('')
    }
    //按照时间排序
    const sortCommentsForTime = () => {
        const sortedComments = [...comment].sort((a, b) => new Date(b.time) - new Date(a.time));
        setComment(sortedComments);
    }
    //按照热度排序（点赞数）
    const sortCommentsForLike = () => {
        const sortedComments = [...comment].sort((a, b) => b.like - a.like);
        setComment(sortedComments);
    }
    //删除功能实现
    const deleteComment = (id) => {
        const updatedComments = comment.filter(item => item.id !== id);
        setComment(updatedComments);
    }

    return (
        <>
            <div id="container">
                <div className='control'>
                    <div className='control_left'>
                        <span><b style={{ fontSize: '20px' }}>评论</b> {comment.length}</span>
                    </div>
                    <div className='control_right'>
                        <span onClick={sortCommentsForTime}>最新</span>｜<span onClick={sortCommentsForLike}>最热</span>
                    </div>
                </div>

                <div className='cotent'>
                    <div className='userInput'>
                        <div className='avatar'>
                            <img
                                src="https://www.keaitupian.cn/cjpic/frombd/2/253/3498215567/1247959937.jpg"
                                alt="头像"
                            />
                        </div>
                        <div className='input'>
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder='发表一条友善的评论'
                            />
                        </div>
                        <div>
                            <button onClick={addComment}>发送</button>
                        </div>
                    </div>

                    <div className='comment-content'>
                        <ul>
                            {comment.map((item) => (
                                <li className='comment-content-item' key={item.id}>
                                    <p>{item.name}</p>
                                    <p>{item.text}</p>
                                    <div className='comment-content-item-info'>
                                        <span>{item.time}</span>
                                        <span>点赞数：{item.like}</span>
                                        <span 
                                        style={{ color: 'red', cursor: 'pointer' }}
                                        onClick={()=>deleteComment(item.id)}
                                        >删除</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment
