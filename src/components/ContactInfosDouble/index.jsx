'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function ContactInfosDouble(props) {
  const { datas, icon } = props
  return (
    <>
      <div className="address-link infos-column">
        <div className="infos-svg-container green">
          <FontAwesomeIcon
            className=""
            icon={icon}
            style={{
              fontSize: '25px',
              color: 'white',
            }}
            size="lg"
          />
        </div>
        <div className="right-double-div">
          {datas && datas.length > 0
            ? datas.map((infos, index) => {
                console.log(index, datas.length)
                return (
                  <React.Fragment key={infos.txt}>
                    <Link
                      className="address-double-link"
                      href={infos.link}
                      target={infos.link ? '_blank' : ''}
                      rel="noopener noreferrer"
                    >
                      <div
                        className="infos-div"
                        dangerouslySetInnerHTML={{ __html: infos.txt }}
                      ></div>
                    </Link>
                    {index < datas.length - 1 ? (
                      <div className="infos-separator"></div>
                    ) : (
                      ''
                    )}
                  </React.Fragment>
                )
              })
            : ''}
        </div>
      </div>
    </>
  )
}

/**<>
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
        </> */
