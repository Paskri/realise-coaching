import Image from 'next/image'
import React from 'react'

import './pictureandtext.css'

/**
 * Picture and text component / custom title
 *
 * @param {Object} props - The props object
 * @param {string} props.txt - The primary text
 * @param {string} props.color - The base color
 * @param {string} props.lOrR - left or right
 * @param {string} props.picture - picture url
 * @param {string} props.alt - alt text for picture
 * @returns {JSX.Element} The CarrouselBtn component
 */
export default function PictureAndText(props) {
  const { lOrR, picture, alt, txt, color = 'green' } = props
  return (
    <section
      className={`picture-and-text ${color}-fog`}
      style={{
        boxShadow: `0 20px 30px var(--${color}-fog)`,
      }}
    >
      <div className="picture-and-text-container">
        {picture ? (
          <Image
            className="footer-logo mb-3"
            src={picture}
            alt={alt}
            width={300}
            height={300}
            priority={true}
          />
        ) : (
          ''
        )}

        <div
          className="txt-container"
          dangerouslySetInnerHTML={{ __html: txt }}
        ></div>
      </div>
    </section>
  )
}
