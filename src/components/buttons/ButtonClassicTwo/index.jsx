'use client'
import './buttonclassic.css'
//import { ColorContext } from '@/contexts/ColorContext'
import React, { useState } from 'react'

export default function ButtonClassicTwo(props) {
  const { txt } = props
  //const { fourthColor, fourthGradientColor, thirdColor } =
  //  useContext(ColorContext)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className="classic-btn-two"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {txt}
    </button>
  )
}

/**style={{
        background: isHovered
          ? thirdColor
          : `linear-gradient(
      0deg,
      ${fourthGradientColor} 0%,
      ${fourthColor} 100%
    )`,
        color: isHovered ? fourthColor : 'white',
      }} */
