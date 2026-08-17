import { useState, useEffect } from 'react'
import Headbar from './basics/Headbar'
import MainTitle from './components/MainTitle/MainTitle'

import './App.css'

function App() {
  const [selectedColor, setSelectedColor] = useState('#9B4747')

  useEffect(() => {
        document.body.style.setProperty('--theme-color', selectedColor)
    }, [selectedColor])

  return (
    <>
    <div className='global'>
       <Headbar
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
          />
        <MainTitle />

    </div>
    </>
  )
}

export default App
