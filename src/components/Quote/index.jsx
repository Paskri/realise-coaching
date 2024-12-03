import React from 'react'
import './quote.css'

export default function Quote(props) {
  const { txt, color } = props
  return (
    <div className="quote">
      <div className={`quote-container ${color}-fog`}>
        <span className={`stylized-quote text-${color}`}>“ </span>
        {txt}
        <span className={`stylized-quote text-${color}`}> ”</span>
      </div>
    </div>
  )
}
