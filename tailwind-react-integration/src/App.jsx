import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p className='bg-amber-100 text-9xl'>Hello its Churchill</p>
      <UserProfile />
    </div>
  )
}

export default App
