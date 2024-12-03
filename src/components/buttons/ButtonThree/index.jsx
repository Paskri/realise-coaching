'use client'
import './buttonthree.css'
//import { ColorContext } from '@/contexts/ColorContext'
import React, { useState } from 'react'

export default function ButtonThree(props) {
  const { txt } = props
  //const { fourthColor, fourthGradientColor } = useContext(ColorContext)
  const [isHovered, setIsHovered] = useState(false)
  return (
    <button
      className="custom-btn btn-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{txt}</span>
    </button>
  )
}

/**style={{
        background: isHovered
          ? `white`
          : `linear-gradient(
    0deg,
    ${fourthGradientColor} 0%,
    ${fourthColor} 100%
  )`,
      }} */
