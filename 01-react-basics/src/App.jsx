import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const clickHandler = () => {
    setCount(count + 1);
  }
  
  return (
    <div>
      <button onClick={clickHandler}>Click me to increase count</button>
      <h3>Count : {count}</h3>
    </div>
  )
}

export default App
