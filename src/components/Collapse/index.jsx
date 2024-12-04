'use client'
import { useState } from 'react'
import dropdownClose from './images/dropdown-close.svg'
import dropdownOpen from './images/dropdown-open.svg'
import Image from 'next/image'

import './collapse.css'

export default function Collapse(props) {
  const { size, title, content } = props
  const [visible, setVisible] = useState(false)

  return (
    <div className={'collapsable-container ' + size}>
      <button
        onClick={() => {
          setVisible(!visible)
        }}
        className={`btn-collapse ${visible ? 'active' : ''}`}
      >
        <h2>{title}</h2>
        <Image
          src={visible ? dropdownOpen : dropdownClose}
          alt="Dropdown"
          width={25}
          height={25}
        />
      </button>
      <div className={'collapsable ' + size + (visible ? ' show' : '')}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        )}
      </div>
    </div>
  )
}
