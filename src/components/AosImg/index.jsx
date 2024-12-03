'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

export default function AosImg(props) {
  const { src, alt, width, height, style = {} } = props
  return (
    <div data-aos="fade-up">
      <Image src={src} alt={alt} width={width} height={height} style={style} />
    </div>
  )
}
