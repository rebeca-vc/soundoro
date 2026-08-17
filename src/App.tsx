import { useState } from 'react'
import Headbar from './basics/Headbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='global'>
      <Headbar/>
    </div>
    </>
  )
}

export default App
