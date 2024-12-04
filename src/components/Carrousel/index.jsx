'use client'
import React, { useEffect, useRef, useState } from 'react'
import CarrouselBtn from '../buttons/CarrouselBtn'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import './carrousel.css'

import colorSet from '../../assets/colors.json'

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Carrousel() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const { data, error } = useSWR(`${apiUrl}/temoignage`, fetcher)
  const [carIndex, setCarIndex] = useState(1)
  const [nextIndex, setNextIndex] = useState(1)
  const [stepWidth, setStepWidth] = useState(0)
  const [carrouselDatas, setCarrouselDatas] = useState([])
  const [currentWindowWidth, setCurrentWindowWidth] = useState(0)
  const [run, setRun] = useState(false)

  const tcRef = useRef(null)
  const tcarRef = useRef(null)
  const intervalRef = useRef(null)
  const carIndexRef = useRef(null)
  const stepWidthRef = useRef(null)

  const lastTimestampRef = useRef(null)
  const animationFrameRef = useRef(null)

  // updating step Width ref
  useEffect(() => {
    stepWidthRef.current = stepWidth
  }, [stepWidth])

  // Updating index Ref
  useEffect(() => {
    carIndexRef.current = carIndex
    const testimonialCards = document.querySelectorAll('.testimonial-card')
    for (const card of testimonialCards) {
      if (card.getAttribute('aria-hidden') === 'false') {
        card.setAttribute('inert')
        const jsCardBtn = card.querySelector('.js--card-btn')
        jsCardBtn.setAttribute('aria-hidden', 'true')
        jsCardBtn.setAttribute('tab-index', '-1')
        break
      }
    }
    if (testimonialCards[carIndex]) {
      testimonialCards[carIndex].removeAttribute('inert')
      testimonialCards[carIndex]
        .querySelector('.js--card-btn')
        .setAttribute('aria-hidden', 'false')
      testimonialCards[carIndex]
        .querySelector('.js--card-btn')
        .setAttribute('tab-index', '0')
    }
  }, [carIndex])

  // creating data array
  useEffect(() => {
    if (data) {
      const clonedStart = data.slice(-1)
      const clonedEnd = data.slice(0, 1)
      setCarrouselDatas([...clonedStart, ...data, ...clonedEnd])
    }
  }, [data])

  // container initialisation to index 1
  useEffect(() => {
    const container = tcRef.current
    if (container) {
      let currentStep = 0
      const windowWidth = window.innerWidth
      setCurrentWindowWidth(windowWidth)
      if (windowWidth < 610) {
        currentStep = windowWidth
      } else if (windowWidth >= 610 && windowWidth < 1000) {
        currentStep = 600
      } else if (windowWidth >= 1000) {
        currentStep = 750
      }
      setStepWidth(currentStep)
      container.style.transition = 'none'
      container.style.left = `-${carIndex * currentStep}px`
      setCarIndex(1)
    }
  }, [carrouselDatas])

  /* *** Resizing *** */
  useEffect(() => {
    const handleResize = () => {
      const container = tcRef.current
      if (container) {
        const windowWidth = window.innerWidth
        setCurrentWindowWidth(window.innerWidth)
        let currentStep = 0
        if (windowWidth < 768) {
          currentStep = windowWidth
        } else if (windowWidth >= 768 && windowWidth < 1000) {
          currentStep = 600
        } else if (windowWidth >= 1000) {
          currentStep = 750
        }
        setStepWidth(currentStep)
        container.style.transition = 'none'
        container.style.left = `-${carIndexRef * currentStep}px`
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // updating position Index
  useEffect(() => {
    const container = tcRef.current
    let newIndex = 0
    if (container) {
      if (nextIndex < 1) {
        container.style.transition = `unset`
        container.style.left = `-${(carrouselDatas.length - 1) * stepWidth}px`

        setTimeout(() => {
          container.style.transition = `1s ease-in-out`
          container.style.left = `-${(carrouselDatas.length - 2) * stepWidth}px`
        }, 200)
        newIndex = carrouselDatas.length - 2
      } else if (nextIndex > carrouselDatas.length - 2) {
        container.style.transition = `unset`
        container.style.left = `-${0}px`

        setTimeout(() => {
          container.style.transition = `1s ease-in-out`
          container.style.left = `-${stepWidth + 1}px`
        }, 200)
        newIndex = 1
      } else {
        container.style.transition = `1s ease-in-out`
        container.style.left = `-${nextIndex * stepWidth}px`
        newIndex = nextIndex
      }
      setCarIndex(newIndex)
      carIndexRef.current = newIndex
      setTimeout(() => {
        container.style.transition = `unset`
      }, 1000)
    }
  }, [nextIndex])

  //************** Automatic slide *****************
  const startRAF = () => {
    const step = (timestamp) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp
      const elapsed = timestamp - lastTimestampRef.current
      if (elapsed >= 7000) {
        setNextIndex((prev) => carIndexRef.current + 1)
        lastTimestampRef.current = timestamp
      }
      intervalRef.current = requestAnimationFrame(step)
    }
    setRun(true)
    intervalRef.current = requestAnimationFrame(step)
  }

  const stopRAF = () => {
    if (intervalRef.current) {
      cancelAnimationFrame(intervalRef.current)
      intervalRef.current = null
    }
    setRun(false)
  }

  useEffect(() => {
    const carrousel = tcarRef.current

    if (!carrousel) return

    const handleMouseEnter = () => {
      stopRAF()
    }
    const handleMouseLeave = () => {
      startRAF()
    }

    startRAF()
    if (tcarRef.current) {
      tcarRef.current.addEventListener('mouseenter', handleMouseEnter)
      tcarRef.current.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      stopRAF()
      if (tcarRef.current) {
        tcarRef.current.removeEventListener('mouseenter', handleMouseEnter)
        tcarRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <>
      <section
        className="testimonial-carrousel"
        ref={tcarRef}
        aria-roledescription="carousel"
        aria-label="Testimonials Carousel"
      >
        <div className="testimonials-btn-container">
          <button
            href="#"
            className="carrousel-prev"
            aria-controls="testimonial-inner"
            aria-label="Previous testimonial"
            onClick={(e) => setNextIndex((prev) => carIndex - 1)}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ fontSize: '24px' }}
            />
          </button>
          <button
            href="#"
            className="carrousel-next"
            aria-controls="testimonial-inner"
            aria-label="Next testimonial"
            onClick={(e) => setNextIndex((prev) => carIndex + 1)}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: '24px' }}
            />
          </button>
          <div className="ctrl-btns">
            {carrouselDatas
              ? carrouselDatas.map((item, index) =>
                  index != 0 && index != carrouselDatas.length - 1 ? (
                    <button
                      key={`nav-btn-${index}`}
                      className={`small-btn ${
                        carIndex === index ? 'active' : ''
                      }`}
                      onClick={() => setNextIndex(index)}
                      aria-controls={`testimonial-${index}`}
                      aria-label={`Go to testimonial ${index}`}
                    ></button>
                  ) : (
                    ''
                  )
                )
              : ''}
          </div>
        </div>
        <div className="testimonial-container">
          <div
            id="testimonial-inner"
            className="testimonial-inner"
            ref={tcRef}
            aria-live="off"
          >
            {carrouselDatas
              ? carrouselDatas.map((item, index) => {
                  let color = '#000000'
                  let link = ''
                  switch (item.acf_data.type) {
                    case 'Coaching Adulte':
                      color = colorSet.purple
                      link = '/prestations/coaching-adulte'
                      break
                    case 'Coaching Orientation Scolaire':
                      color = colorSet.orange
                      link = '/prestations/coaching-orientation-scolaire'
                      break
                    case 'Coaching en Entreprise':
                      color = colorSet.red
                      link = '/prestations/coaching-en-entreprise'
                      break
                    case 'Coaching en Milieu Scolaire':
                      color = colorSet.blue
                      link = '/prestations/coaching-en-milieu-scolaire'
                      break
                  }
                  /* real index + defining clones */
                  let realIndex = null
                  if (index === 0) {
                    realIndex = `${carrouselDatas.length - 2}-clone`
                  } else if (index === carrouselDatas.length - 1) {
                    realIndex = `1-clone`
                  } else {
                    realIndex = index
                  }
                  return (
                    <div
                      id={`testimonial-${index + 1}`}
                      className="testimonial-card"
                      key={`${item.slug}-${index}`}
                      role="group"
                      aria-roledescription={`slide`}
                      aria-label={`${index + 1} of ${carrouselDatas.length}`}
                      inert="true"
                    >
                      <CarrouselBtn
                        txt={item.acf_data.type}
                        txt2="En savoir +"
                        colorOne={color}
                        link={link}
                      />

                      <h3
                        dangerouslySetInnerHTML={{
                          __html: item.title.rendered,
                        }}
                      ></h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.acf_data.extrait,
                        }}
                      ></div>
                      <span className="author">{item.acf_data.auteur}</span>
                    </div>
                  )
                })
              : ''}
          </div>
        </div>
      </section>
    </>
  )
}
