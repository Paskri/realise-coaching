'use client'
import adjustColor from '@/functions/adjustColor'
import './buttonone.css'
//import { ColorContext } from '@/contexts/ColorContext'
import React, { useContext, useState } from 'react'
/**
 * ButtonOne component
 *
 * @param {Object} props - The props object
 * @param {string} props.txt - The primary text
 * @param {string} props.colorOne - The base color
 * @param {string} [props.link='/'] - The link to navigate
 * @returns {JSX.Element} The CarrouselBtn component
 */
export default function ButtonOne(props) {
  const { txt, color, colorOne, link = '/', type } = props
  let colorTwo = '#ffffff'
  if (colorOne) {
    colorTwo = adjustColor(colorOne)
  }
  //const { primaryColor, primaryGradientColor } = useContext(ColorContext)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      type={type}
      className={`custom-btn btn-7 ${color}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => (window.location.href = link)}
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
      ${primaryGradientColor} 0%,
      ${primaryColor} 100%
    )`,
      }} */
