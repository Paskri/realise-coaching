'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AosInit() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return <></>
}
