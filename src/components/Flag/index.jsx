'use client'
import React from 'react'
import './flag.css'
/**
 * Flag component / custom title
 *
 * @param {Object} props - The props object
 * @param {string} props.txt - The primary text
 * @param {string} props.color - The base color
 * @param {number} props.level - title level default 2
 * @returns {JSX.Element} The CarrouselBtn component
 */
export default function Flag(props) {
  const { txt, color = 'green', level = 2 } = props
  return (
    <section className={`description-container ${color}`}>
      <div className="description element">
        {level === 1 ? (
          <h1 className="element2">{txt}</h1>
        ) : level === 2 ? (
          <h2 className="element2">{txt}</h2>
        ) : level === 3 ? (
          <h3 className="element2">{txt}</h3>
        ) : (
          ''
        )}
      </div>
    </section>
  )
}
