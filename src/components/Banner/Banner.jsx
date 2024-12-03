'use client'
import React, { useEffect, useRef, useState } from 'react'
import './banner.css'
import Image from 'next/image'

export default function Banner(props) {
  const { src, title, subtitle, alt = '' } = props
  const [size, setSize] = useState(768)
  const bannerRef = useRef(null)

  useEffect(() => {
    const wiw = window.innerWidth
    if (wiw < 768) {
      setSize(768)
    } else if (wiw >= 768 && wiw < 1024) {
      setSize(1024)
    } else if (wiw >= 1024) {
      setSize(1280)
    }
    const handleResize = () => {
      const wiw = window.innerWidth
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
      const banner = bannerRef.current
      if (banner) {
        const scrollY = window.scrollY * 0.5
        if (scrollY < 200) {
          banner.style.transform = `translateY(${scrollY}px)`
        }
      }
    }
    window.addEventListener('scroll', handleBanner)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleBanner)
    }
  }, [])

  return (
    <section className="banner" ref={bannerRef}>
      <div className="banner-container">
        <div className="banner-card">
          <div className="banner-card-container">
            <h1 className="banner-card-title">{title}</h1>
            <span className="banner-card-slogan">{subtitle}</span>
          </div>
          <Image
            className="banner-card-img"
            src={`/images/banners/${src}-${size}.webp`}
            alt={alt}
            fill={true}
            priority={true}
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}
