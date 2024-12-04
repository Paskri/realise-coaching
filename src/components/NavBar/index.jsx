'use client'
import React, { useCallback, useState } from 'react'
import navLinks from '../../assets/navlinks.json'
import Link from 'next/link'
import ReactModal from 'react-modal'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import './menu.css'

ReactModal.setAppElement('body')
const customStyle = {
  overlay: {
    width: '100vw',
    maxWidth: '1440px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    overflow: 'auto',
    padding: '0',
    zIndex: 40,
    margin: '0',
    color: '#175a48',
  },
  content: {
    position: 'absolute',
    zIndex: 40,
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    border: 'none',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    transition: '0.3s ease-in-out',
  },
}

export default function NavBar(props) {
  const { color = 'green' } = props
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleModal = useCallback(
    (e) => {
      e.stopPropagation()
      setIsOpen(!isOpen)
    },
    [isOpen]
  )
  const router = useRouter()
  const isActive = (path) => {
    return router.pathname === path
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link href="/">
              <div className="navbar-image-container">
                <Image
                  src={`/images/Realise-logo-carré-${color}.webp`}
                  alt={'Realise coaching logo'}
                  width={55}
                  height={55}
                  priority={true}
                />
                <div className="logo-text-container">
                  <span className={`text-${color}`}>REALISE</span>

                  <span className={`coaching text-${color}`}>Coaching</span>
                </div>
              </div>
            </Link>
          </div>
          <svg
            className="ham hamRotate ham8 block md:hidden"
            viewBox="0 0 100 100"
            width={80}
            onClick={(e) => {
              const navBtn = document.querySelector('.ham')
              navBtn.classList.toggle('active')
              toggleModal(e)
              // ouvrir modale
            }}
          >
            <path
              className={`line ${color} top`}
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            />
            <path className={`line ${color} middle`} d="m 30,50 h 40" />
            <path
              className={`line ${color} bottom`}
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            />
          </svg>
          <nav className="">
            {navLinks.map((link, index) => (
              <li
                key={link.link}
                className={`navbar-li ${isActive(link.link) ? 'active' : ''}`}
                onMouseEnter={() => setDropdownOpen(index)}
                onMouseLeave={() => setDropdownOpen(null)}
                onClick={() =>
                  setDropdownOpen((prev) => (prev === index ? null : index))
                }
              >
                {link.link && !link.submenu ? (
                  <Link href={link.link} className={`link-${color}`}>
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <button className={`navbar-btn link-${color}`}>
                      {link.label}
                    </button>
                    {dropdownOpen === index && (
                      <ul
                        className={`${
                          dropdownOpen === index ? 'open' : ''
                        } dropdown`}
                      >
                        {link.submenu.map((subLink, subIndex) => (
                          <li key={subIndex} className="">
                            <Link
                              href={subLink.link}
                              className={`link-${color}`}
                            >
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </nav>
          <ReactModal
            className="nav-modal"
            closeTimeoutMS={500}
            isOpen={isOpen}
            onRequestClose={toggleModal}
            style={customStyle}
            contentLabel={''}
          >
            <nav className={`mobile-header-nav link-${color}`}>
              <Image
                className="mobile-nav-logo"
                src={`/images/Realise-logo-carré-${color}.webp`}
                alt={'Realise coaching logo'}
                width={80}
                height={80}
              />
              <ul className="mobile-nav-ul primary">
                {navLinks.map((link, index) => (
                  <li key={link.link} className={`mobile-nav-li`}>
                    {link.link && !link.submenu ? (
                      <Link
                        href={link.link}
                        className={`mobile-nav-link link-${color}`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          className={`mobile-nav-btn link-${color}`}
                          onClick={() =>
                            setDropdownOpen(
                              dropdownOpen === index ? null : index
                            )
                          }
                        >
                          {link.label}
                        </button>
                        <div className="mobile-dropdown-container">
                          {dropdownOpen === index && (
                            <ul className="mobile-dropdown-ul">
                              {link.submenu.map((subLink, subIndex) => (
                                <li
                                  key={subIndex}
                                  className="mobile-dropdown-li"
                                >
                                  <Link
                                    href={subLink.link}
                                    className={`link-${color}`}
                                  >
                                    {subLink.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </ReactModal>
        </div>
      </div>
    </>
  )
}
