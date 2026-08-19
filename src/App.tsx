import { useState, useEffect } from 'react'
import Headbar from './basics/Headbar'
import MainTitle from './components/MainTitle/MainTitle'
import Sound from './components/Sound/Sound'
import Pomodoro from './components/Pomodoro/Pomodoro'

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
        <div className='content'>
            <MainTitle />
            <div className='functions-base'>
              <div className='functions'>
                <Sound />
                <Pomodoro />
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
