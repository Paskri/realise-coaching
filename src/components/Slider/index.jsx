'use client'
import React, { useEffect, useRef, useState } from 'react'
import './slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { PulseLoader } from 'react-spinners'
import data from '../../assets/slider.json'

export default function Slider() {
  const [stepWidth, setStepWidth] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [nextIndex, setNextIndex] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [sliderDatas, setSliderDatas] = useState([])
  const [run, setRun] = useState(false)
  const [size, setSize] = useState(768)

  const containerRef = useRef(null)
  const sliderRef = useRef(null)
  const intervalRef = useRef(null)
  const currentIndexRef = useRef(null)

  const lastTimestampRef = useRef(null) 
  const animationFrameRef = useRef(null)

  // Updating to current index
  useEffect(() => {
    currentIndexRef.current = currentIndex
    const sliderCards = document.querySelectorAll('.slider-card')
    for (const card of sliderCards) {
      if (card.getAttribute('aria-hidden') === 'false') {
        card.setAttribute('aria-hidden', 'true')
        break
      }
    }
    if (sliderCards[currentIndex]) {
      sliderCards[currentIndex].setAttribute('aria-hidden', 'false')
    }
  }, [currentIndex])

  // Slider data init
  useEffect(() => {
    if (data) {
      const clonedStart = data.slice(-1)
      const clonedEnd = data.slice(0, 1)
      setSliderDatas([...clonedStart, ...data, ...clonedEnd])
      setIsLoading(false) // Mettre à jour isLoading lorsque les données sont prêtes
    }
  }, [data])

  //Loader spinner to slider transition
  useEffect(() => {
    const container = sliderRef.current
    if (!isLoading && container) {
      container.style.transition = `unset`
      container.style.opacity = `0`
      setTimeout(() => {
        container.style.transition = `2s ease-in-out`
        container.style.opacity = `1`
      }, 300)
    }
    setTimeout(() => {
      const container = sliderRef.current
      if (container) {
        container.style.transition = `unset`
      }
    }, 3000)
  }, [isLoading])

  // Updating display from index
  useEffect(() => {
    const container = containerRef.current
    let newIndex = 0
    if (container) {
      if (nextIndex < 1) {
        container.style.transition = `unset`
        container.style.left = `-${(sliderDatas.length - 1) * stepWidth}px`

        setTimeout(() => {
          container.style.transition = `2s ease-in-out`
          container.style.left = `-${(sliderDatas.length - 2) * stepWidth}px`
        }, 200)
        newIndex = sliderDatas.length - 2
      } else if (nextIndex > sliderDatas.length - 2) {
        container.style.transition = `unset`
        container.style.left = `-${0}px`
        setTimeout(() => {
          container.style.transition = `2s ease-in-out`
          container.style.left = `-${stepWidth}px`
        }, 200)
        newIndex = 1
      } else {
        container.style.transition = `2s ease-in-out`
        container.style.left = `-${nextIndex * stepWidth}px`
        newIndex = nextIndex
      }
      setCurrentIndex(newIndex)
      setTimeout(() => {
        container.style.transition = `unset`
      }, 2500)
    }
  }, [nextIndex])

  // Init container to index 1
  useEffect(() => {
    const container = containerRef.current
    const wiw = window.innerWidth
    if (container) {
      setStepWidth(wiw)
      container.style.left = `-${window.innerWidth}px`
      setCurrentIndex(1)
    }
    if (wiw < 768) {
      setSize(768)
    } else if (wiw >= 768 && wiw < 1024) {
      setSize(1024)
    } else if (wiw >= 1024) {
      setSize(1280)
    }
  }, [sliderDatas])

  // Changing slider Index
  const handleCarouselClick = (e = null, value) => {
    if (e) {
      e.preventDefault()
    }
    setNextIndex((prev) => currentIndex + value)
  }

  //************ Automatic slide *******************
  const startRAF = () => {
    const step = (timestamp) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp
      const elapsed = timestamp - lastTimestampRef.current
      if (elapsed >= 7000) {
        setNextIndex((prev) => currentIndexRef.current + 1)
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
    const slider = sliderRef.current

    if (!slider) return

    // event handling
    const handleMouseEnter = () => {
      stopRAF()
    }
    const handleMouseLeave = () => {
      startRAF()
    }
    slider.addEventListener('mouseenter', handleMouseEnter)
    slider.addEventListener('mouseleave', handleMouseLeave)

    //mounting
    startRAF()

    /* ***** Window resizing ***** */
    const handleResize = () => {
      const wiw = window.innerWidth
      setStepWidth(wiw)
      const container = containerRef.current
      if (container) {
        container.style.transition = 'unset'
        container.style.left = `-${currentIndexRef.current * wiw}px`
      }
      if (wiw < 768) {
        setSize(768)
      } else if (wiw >= 768 && wiw < 1024) {
        setSize(1024)
      } else if (wiw >= 1024) {
        setSize(1280)
      }
    }

    window.addEventListener('resize', handleResize)

    /* ***** Parallax ***** */
    const handleBanner = () => {
      const banner = sliderRef.current
      const scrollY = window.scrollY * 0.5
      if (scrollY < 200) {
        banner.style.transform = `translateY(${scrollY}px)`
      }
    }
    window.addEventListener('scroll', handleBanner)

    //cleaning
    return () => {
      stopRAF()
      slider.removeEventListener('mouseenter', handleMouseEnter)
      slider.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleBanner)
    }
  }, [])

  return (
    <>
      <section id="slider" className="slider" ref={sliderRef}>
        {isLoading ? (
          <div className="loader-container">
            <PulseLoader size={10} color={'#175a48'} speedMultiplier={0.8} />
          </div>
        ) : (
          <>
            <div className="btn-container">
              <a
                href="#"
                className="slider-prev"
                aria-controls="slider-container"
                aria-label="Previous slide"
                onClick={(e) => setNextIndex(currentIndex - 1)}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ fontSize: '2.5rem', width: '25px', height: '40px' }}
                />
              </a>
              ,
              <a
                href="#"
                className="slider-next"
                aria-controls="slider-container"
                aria-label="Next slide"
                onClick={(e) => setNextIndex(currentIndex + 1)}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
              <div className="ctrl-btns">
                {sliderDatas
                  ? sliderDatas.map((item, index) =>
                      index != 0 && index != sliderDatas.length - 1 ? (
                        <button
                          key={`nav-btn-${index}`}
                          className={`small-btn ${
                            currentIndex === index ? 'active' : ''
                          }`}
                          onClick={() => setNextIndex(index)}
                          aria-controls={`slide-${index}`}
                          aria-label={`Go to slide ${index}`}
                        ></button>
                      ) : (
                        ''
                      )
                    )
                  : ''}
              </div>
            </div>

            <div
              id="slider-container"
              className="slider-container"
              ref={containerRef}
              aria-live="off"
            >
              {sliderDatas
                ? sliderDatas.map((item, index) => {
                    /* real index + defining clones */
                    let realIndex = null
                    if (index === 0) {
                      realIndex = `${sliderDatas.length - 2}-clone`
                    } else if (index === sliderDatas.length - 1) {
                      realIndex = `1-clone`
                    } else {
                      realIndex = index
                    }

                    return (
                      <div
                        key={`${item.title}-${index}`}
                        id={`slide-${index + 1}`}
                        className="slider-card"
                        role="group"
                        aria-roledescription={`slide-${realIndex}`}
                        aria-label={`${index + 1} of ${sliderDatas.length}`}
                        aria-hidden="true"
                      >
                        <div className="slider-card-container">
                          <span className="slider-card-title">
                            {item.title}
                          </span>
                          <span className="slider-card-slogan">
                            {item.subtitle}
                          </span>
                        </div>
                        <Image
                          className="slider-card-img"
                          src={`/images/banners/${item.img}-${size}.webp`}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1280px"
                          loading={index > 0 && index < 2 ? 'eager' : 'lazy'}
                          priority={index > 0 && index < 2}
                        />
                      </div>
                    )
                  })
                : ''}
            </div>
          </>
        )}
      </section>
    </>
  )
}
