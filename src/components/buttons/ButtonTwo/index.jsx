import React from 'react'
import './buttontwo.css'
import adjustColor from '@/functions/adjustColor'
export default function ButtonTwo(props) {
  const { txt, txt2, colorOne } = props
  const colorTwo = adjustColor(colorOne)

  return (
    <button className="custom-btn-2 btn-12">
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
