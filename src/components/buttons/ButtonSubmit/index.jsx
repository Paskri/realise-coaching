'use client'
import adjustColor from '@/functions/adjustColor'

import './buttonsubmit.css'

import React, { useContext, useState } from 'react'
/**
 * ButtonSubmit component
 * @param {Object} props - The props object
 * @param {string} props.txt - The primary text
 * @param {string} props.colorOne - The base color
 * @returns {JSX.Element} The CarrouselBtn component
 */
export default function ButtonSubmit(props) {
  const { txt, color, colorOne, type } = props
  let colorTwo = '#ffffff'
  if (colorOne) {
    colorTwo = adjustColor(colorOne)
  }
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      type={type}
      className={`custom-btn btn-7 ${color}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{txt}</span>
    </button>
  )
}
