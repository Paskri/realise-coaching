'use client'
import './buttonclassic.css'
import React, { useState } from 'react'

export default function ButtonClassicTwo(props) {
  const { txt } = props
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
