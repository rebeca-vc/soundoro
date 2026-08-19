import SoundoroIcon from '../assets/SoundoroIcon.svg?react'
import defaultAvatar from '../assets/default-avatar.jpg'
import ColorPicker from '../components/ColorPicker/ColorPicker'
import '../App.css'

interface HeadbarProps {
    selectedColor: string
    setSelectedColor: (color: string) => void
}

function Headbar({ selectedColor, setSelectedColor }: HeadbarProps) {
  return (
    <>
      <div id='top'>
          <div className='headbar'>
              <SoundoroIcon className="headbar-logo" />
              <div className='headbar-config'>
                <div id='headbar-title'>
                  <p>Hello there!</p>
                </div>
                {/* <div id='headbar-usr-img'>
                  <img src={defaultAvatar} id="avatar"/>
                </div> */}
                <ColorPicker
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />
              </div>
          </div>
      </div>
    </>
  )
}

export default Headbar
