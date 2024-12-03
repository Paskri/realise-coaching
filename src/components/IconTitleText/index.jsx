import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './icontitletext.css'
export default function IconTitleText(props) {
  const { icon, title, text, color } = props

  return (
    <section className="icon-title-text">
      <div className={`itt-left ${color}`}>
        <FontAwesomeIcon
          icon={icon}
          style={{
            fontSize: '30px',
            width: '30px',
            height: '30px',
            color: 'white',
            padding: '10px',
          }}
          size="lg"
        />
        <h3>{title}</h3>
      </div>
      <div className="itt-right">
        {text ? text.map((p, index) => <p key={p}>{p}</p>) : ''}
      </div>
    </section>
  )
}
