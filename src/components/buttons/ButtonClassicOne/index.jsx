'use client'

import './buttonclassic.css'
import React, { useState } from 'react'

export default function ButtonClassicOne(props) {
  const { txt, link } = props

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
