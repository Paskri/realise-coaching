
import Banner from '@/components/Banner/Banner'
import NavBar from '@/components/NavBar'
import Offset from '@/components/Offset'
import PopupWrap from '@/components/PopupWrap'
import React from 'react'
import './testcal.css'
import Expertise from '@/components/Expertise'
import Partners from '@/components/Partners'

export const metadata = {
  title: 'Realise Coaching - Qui suis-je ?',
  description: 'Découvrez mes formations, mon parcours et mes expériences en tant que coach',
}

export default function TestCal() {
  return (
    <>
      <header>
        <NavBar />
        <Offset />
        <Banner
          src={'https://api.realise-coaching.fr/wp-content/uploads/2024/10/4-1280x720-1.webp'}
          title={'Test'}
          subtitle={'Ici le texte que tu veux ou pas !'}
        />
      </header>
      <main>
        <Expertise />
        <Partners />
      </main>


    </>
  )
}
