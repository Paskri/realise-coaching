'use client'
import Link from 'next/link'
import './buttonclassic.css'
//import { ColorContext } from '@/contexts/ColorContext'
import React, { useState } from 'react'

export default function ButtonClassicOne(props) {
  const { txt, link } = props
  //const { primaryColor, primaryGradientColor, secondaryColor } =
  //  useContext(ColorContext)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="btnco-container">
      <button
        onClick={() => (window.location.href = link)}
        className="classic-btn-one"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {txt}
      </button>
    </div>
  )
}

/**style={{
        background: isHovered
          ? secondaryColor
          : `linear-gradient(
      0deg,
      ${primaryGradientColor} 0%,
      ${primaryColor} 100%
    )`,
        color: isHovered ? primaryColor : 'white',
      }} */
