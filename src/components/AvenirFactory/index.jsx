import Image from 'next/image'
import React from 'react'

import './avenirfactory.css'

export default function AvenirFactory(props) {
  const { big } = props
  return (
    <div className="partner">
      <a href="https://www.avenirfactory.fr" target="about:blank">
        <Image
          className="service-card-img"
          src={`/images/${big ? 'af-logo' : 'avenir-factory'}.webp`}
          alt="Avenir Factory Logo"
          width={big ? 138 : 65}
          height={big ? 50 : 65}
          priority={false}
        />
      </a>
    </div>
  )
}
