import React from 'react'
import './buttonFour.css'

export default function ButtonFour(props) {
  const { txt, txt2 } = props
  return (
    <button className="custom-btn btn-13">
      <span>{txt2}</span>
      <span>{txt}</span>
    </button>
  )
}
