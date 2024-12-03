import { ColorContext } from '@/contexts/ColorContext'
import React, { useContext } from 'react'
import './block.css'
export default function Block(props) {
  const { color, call } = props
  const {
    primaryColor,
    setPrimaryColor,
    secondaryColor,
    setSecondaryColor,
    thirdColor,
    setThirdColor,
    fourthColor,
    setFourthColor,
  } = useContext(ColorContext)

  return (
    <div className="block-container">
      <div className="colored" style={{ backgroundColor: color }}></div>
      {call != null ? (
        <input
          type="text"
          value={color}
          onChange={(e) => call(e.target.value)}
        />
      ) : (
        ''
      )}
    </div>
  )
}
