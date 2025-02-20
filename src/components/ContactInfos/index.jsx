'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function ContactInfos(props) {
  const { txt, icon, link = null } = props
  return (
    <>
      {link ? (
        <Link
          className="address-link"
          href={link}
          target={link ? '_blank' : ''}
          rel="noopener noreferrer"
        >
          <div className="infos-svg-container green">
            <FontAwesomeIcon
              className=""
              icon={icon}
              style={{
                color: 'white',
              }}
              size="lg"
            />
          </div>
          <div
            className="right-div"
            dangerouslySetInnerHTML={{ __html: txt }}
          ></div>
        </Link>
      ) : (
        <>
          <div className="address-link">
            <FontAwesomeIcon
              className="green"
              icon={icon}
              style={{
                fontSize: '24px',
                width: '24px',
                height: '24px',
                color: 'white',
                padding: '30px',
              }}
              size="lg"
            />
            <div
              className="right-div"
              dangerouslySetInnerHTML={{ __html: txt }}
            ></div>
          </div>
        </>
      )}
    </>
  )
}
