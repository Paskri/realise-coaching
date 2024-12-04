'use client'
import React, { useState } from 'react'

import './buttonthree.css'

export default function ButtonThree(props) {
  const { txt } = props
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
