import { useState } from 'react'
import SoundoroIcon from '../assets/SoundoroIcon.svg?react'
import defaultAvatar from '../assets/default-avatar.jpg'
import ColorPicker from '../ColorPicker/ColorPicker'
import '../App.css'

function Headbar() {
  return (
    <>
      <div id='top'>
          <div className='headbar'>
              <SoundoroIcon className="headbar-logo" />
              <div className='headbar-config'>
                <div id='headbar-title'>
                  <p>Hello there!</p>
                </div>
                <div id='headbar-usr-img'>
                  <img src={defaultAvatar} id="avatar"/>
                </div>
                <ColorPicker/>
              </div>
          </div>
      </div>
    </>
  )
}

export default Headbar
