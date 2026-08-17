import { useState } from 'react'

import './ColorPicker.css'

const colors = [
    '#9B4747',
    '#55A05E',
    '#374570',
    '#C19B3A'
]

interface ColorPickerProps {
    selectedColor: string
    setSelectedColor: (color: string) => void
}

function ColorPicker({ selectedColor, setSelectedColor }: ColorPickerProps) {
    const [isOpen, setIsOpen] = useState(false)

    function selectColor(color: string){
        setSelectedColor(color)
        setIsOpen(false)
    }
    
    return (
        <>
            <div className={`color-picker ${isOpen ? 'open' : ''}`}>

                <button 
                    className='color-button' 
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ backgroundColor: selectedColor }} 
                />

                <div className='color-options'>
                    {
                        colors
                            .filter(color => color !== selectedColor)
                            .map(color => (
                                <button 
                                    key={color}
                                    className='color-option'
                                    style={{ backgroundColor: color }}
                                    onClick={() => selectColor(color)}
                                />
                            ))
                            
                    }
                </div>

            </div>
        </>
    )
}

export default ColorPicker;