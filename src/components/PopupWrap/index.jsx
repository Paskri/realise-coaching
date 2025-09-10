'use client'
import React, { useEffect, useState } from 'react'
import { PopupModal } from 'react-calendly'
import './popupwrap.css'

export default function PopupWrap() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      const header = document.querySelector('header')
      header.classList.add('filtered')
      const main = document.querySelector('main')
      main.classList.add('filtered')
      const footer = document.querySelector('footer')
      footer.classList.add('filtered')
    } else {
      document.body.style.overflow = ''
      const header = document.querySelector('header')
      header.classList.remove('filtered')
      const main = document.querySelector('main')
      main.classList.remove('filtered')
      const footer = document.querySelector('footer')
      footer.classList.remove('filtered')
    }
  }, [isModalOpen])

  return (
    <>
      <button
        className="modal-btn"
        onClick={() => {
          setIsModalOpen(true)
        }}
      >
        <span>Réservez votre rendez-vous avec Calendly</span>
      </button>
      {typeof window !== 'undefined' && (
        <PopupModal
          url="https://calendly.com/l-calvayrac"
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055',
          }}
          utm={{}}
          prefill={{}}
          onModalClose={() => setIsModalOpen(false)}
          open={isModalOpen}
          rootElement={document.getElementById('modal-root')}
        />
      )}
    </>
  )
}
