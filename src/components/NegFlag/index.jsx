'use client'
import React from 'react'
import './negflag.css'
/**
 * NegFlag component / custom title
 *
 * @param {Object} props - The props object
 * @param {string} props.txt - The primary text
 * @param {string} props.color - The base color
 * @returns {JSX.Element} The CarrouselBtn component
 */
export default function NegFlag(props) {
  const { txt, color = 'green' } = props
  return (
    <section className={`negflag-container`}>
      <div className={`negflag nf-element text-${color}`}>
        <h3
          className={`nf-element2 text-${color}`}
          dangerouslySetInnerHTML={{ __html: txt }}
        ></h3>
      </div>
    </section>
  )
}
