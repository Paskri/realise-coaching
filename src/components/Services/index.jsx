import React from 'react'
import Link from 'next/link'
import ButtonOne from '../buttons/ButtonOne'
import content from '../../assets/services.json'
import adjustColor from '@/functions/adjustColor'
import Image from 'next/image'
import AvenirFactory from '../AvenirFactory'

import './services.css'

export default function Services() {
  return (
    <>
      <section className="services">
        <div className="services-container">
          {content &&
            content.map((card, index) => {
              const colorOne = card.color
              const colorTwo = adjustColor(colorOne)
              return (
                <div
                  className="services-card "
                  data-aos="fade-up"
                  data-aos-delay={index % 2 !== 0 ? 200 : 0}
                  style={{
                    border: `1px solid var(--${card.color})`,
                  }}
                  key={`${card.title}-${index}`}
                >
                  <div className={`services-card-title ${card.color}`}>
                    <h3>{card.title}</h3>
                  </div>
                  <div
                    className="services-card-text-container"
                    dangerouslySetInnerHTML={{ __html: card.text }} // Utilisation correcte ici
                  ></div>
                  {card.partner ? <AvenirFactory big={false} /> : ''}
                  <ButtonOne
                    txt="En savoir +"
                    color={card.color}
                    colorOne={card.color}
                    link={card.link}
                    type="button"
                  />
                </div>
              )
            })}
        </div>
      </section>
    </>
  )
}
