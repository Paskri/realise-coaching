'use client'
import React, { useEffect, useRef, useState } from 'react'
import './carrousel.css'

export default function CarTests({ data }) {
  const [carIndex, setCarIndex] = useState(2)
  const [step, setStep] = useState(2)
  const [stepWidth, setStepWidth] = useState(0)
  const tcRef = useRef(null)
  const tcarRef = useRef(null)

  const [ni, setNi] = useState(0)

  const clonedStart = data.slice(-2)
  const clonedEnd = data.slice(0, 2)
  const carousselDatas = [...clonedStart, ...data, ...clonedEnd]
  const ciRef = useRef(null)
  const intervalRef = useRef(null)

  // Updating CarIndex for
  useEffect(() => {
    ciRef.current = carIndex
  }, [carIndex])

  const handleCarouselClick = (e = null, value) => {
    e && e.preventDefault()
    const testimonialsContainer = tcRef.current
    testimonialsContainer.style.transition = `1s`
    let nextIndex = ciRef.current + value

    // if click on previous
    if (value < 0) {
      if (nextIndex < 2) {
        nextIndex += data.length + 2
        testimonialsContainer.style.transition = `0s`
        testimonialsContainer.style.left = `-${nextIndex * 500}px`

        setTimeout(() => {
          testimonialsContainer.style.transition = `1s`
          testimonialsContainer.style.left = `-${(nextIndex - 2) * 500}px`
          setCarIndex(nextIndex - 2)
        }, 100)
      } else {
        testimonialsContainer.style.transition = `1s`
        testimonialsContainer.style.left = `-${nextIndex * 500}px`
        nextIndex = carIndex + value
        setCarIndex(nextIndex)
      }
    }
    // if click on NEXT
    else if (value > 0) {
      if (nextIndex >= data.length + 2) {
        nextIndex = 0
        testimonialsContainer.style.transition = `0s`
        testimonialsContainer.style.left = `${nextIndex * 500}px`

        setTimeout(() => {
          testimonialsContainer.style.transition = `1s`
          testimonialsContainer.style.left = `-1000px`
          setCarIndex(2)
        }, 100)
      } else {
        testimonialsContainer.style.transition = `1s`
        testimonialsContainer.style.left = `-${nextIndex * 500}px`
        setCarIndex(nextIndex)
      }
    }
  }

  const startInterval = (step) => {
    intervalRef.current = setInterval(() => {
      handleCarouselClick(null, 2)
      setNi((ni) => ni + 1)
    }, 3000)
  }

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  useEffect(() => {
    // Démarrer l'intervalle au montage du composant
    startInterval(step)
    if (tcarRef.current) {
      tcarRef.current.addEventListener('mouseenter', stopInterval)
      tcarRef.current.addEventListener('mouseleave', startInterval)
    }

    // Nettoyage de l'intervalle au démontage du composant
    return () => {
      stopInterval()
      if (tcarRef.current) {
        tcarRef.current.removeEventListener('mouseenter', stopInterval)
        tcarRef.current.removeEventListener('mouseleave', startInterval)
      }
    }
  }, [])

  return (
    <section className="testimonial-caroussel" ref={tcarRef}>
      <h2>Témoignages</h2>
      <div className="values">
        Interval n° : {ni} -- carIndex : {carIndex} -- step : {step} --
        stepWidth : {stepWidth}{' '}
      </div>
      <div className="btn-container">
        <a
          href="#"
          className="carousel-prev"
          aria-controls="testimonial-carousel"
          aria-label="Previous testimonial"
          onClick={(e) => handleCarouselClick(e, step * -1)}
        >
          <span className="carousel-controls">&lsaquo;</span>
        </a>
        <a
          href="#"
          className="carousel-next"
          aria-controls="testimonial-container"
          aria-label="Next testimonial"
          onClick={(e) => handleCarouselClick(e, step)}
        >
          <span className="carousel-controls">&rsaquo;</span>
        </a>

        <div
          className="testimonial-container"
          aria-roledescription="carousel"
          aria-label="Testimonials Carousel"
        >
          <div className="testimonial-inner" ref={tcRef}>
            {carousselDatas
              ? carousselDatas.map((item, index) => {
                  let color = '#000000'
                  switch (item.acf_data.type) {
                    case 'Coaching Adulte':
                      color = 'orange'
                      break
                    case 'Coaching Adolescent':
                      color = 'red'
                      break
                    case 'Coaching Entreprise':
                      color = 'blue'
                      break
                  }
                  return (
                    <div
                      className="testimonial-card"
                      key={`${item.slug}-${index}`}
                    >
                      <span className="tag" style={{ background: color }}>
                        {item.acf_data.type}
                      </span>
                      Index : {index}
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: item.title.rendered,
                        }}
                      ></h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.content.rendered,
                        }}
                      ></div>
                      <span className="author">{item.acf_data.auteur}</span>
                    </div>
                  )
                })
              : ''}
          </div>
        </div>
      </div>
    </section>
  )
}
