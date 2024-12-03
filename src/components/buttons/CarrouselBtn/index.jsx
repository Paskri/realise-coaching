import React from 'react'
import './carrouselbtn.css'
import adjustColor from '@/functions/adjustColor'

/**
 * CarrouselBtn component
 *
 * @param {Object} props - The props object
 * @param {string} props.txt - The primary text
 * @param {string} props.txt2 - The secondary text
 * @param {string} props.colorOne - The base color
 * @param {string} [props.link='/'] - The link to navigate
 * @returns {JSX.Element} The CarrouselBtn component
 */
export default function CarrouselBtn(props) {
  const { txt, txt2, colorOne, link = '/' } = props
  const colorTwo = adjustColor(colorOne)

  return (
    <button
      className="js--card-btn custom-btn-2 btn-12"
      onClick={() => (window.location.href = link)}
      aria-hidden="true"
      tab-index="-1"
    >
      <span
        style={{
          background: `linear-gradient(0deg, ${colorTwo} 0%, ${colorOne} 100%)`,
        }}
      >
        {txt2}
      </span>
      <span
        style={{
          background: `linear-gradient(0deg, ${colorTwo} 0%, ${colorOne} 100%)`,
        }}
      >
        {txt}
      </span>
    </button>
  )
}
//
