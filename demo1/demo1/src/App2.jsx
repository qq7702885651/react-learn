function App2() {
  const data = [
    { name: '张三', occupation: '警察' },
    { name: '李四', occupation: '教师' },
    { name: '小明', occupation: '医生' },
    { name: '王五', occupation: '工人' },
  ];

  return (
    <>
      <div id="app">
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.name} — {item.occupation}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App2;