import React from 'react'
import './partners.css'
import Image from 'next/image'

export default function Partners() {
  return (
    <section className="partners">
      <h3>Mes partenaires</h3>
      <div className="partners-container">
        <Image
          data-aos="flip-left"
          src="/images/unistra.webp"
          width={156}
          height={50}
          alt="Unistra - logo"
        />
        <Image
          data-aos="flip-left"
          data-aos-delay={200}
          src="/images/af-logo.webp"
          width={138}
          height={50}
          alt="Avenir Factory - logo large"
        />
        <Image
          data-aos="flip-left"
          data-aos-delay={400}
          src="/images/educnat.webp"
          width={147}
          height={50}
          alt="Education Nationale - logo"
        />
      </div>
    </section>
  )
}
