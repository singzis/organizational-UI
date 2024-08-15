import { useState } from 'react'
import className from './Button.module.css'

const Button = () => {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)} className={`${className.custom}`}>Clicked {count} times</button>
  )
}

export default Button
