import ContactForm from '@/components/ContactForm'
import Banner from '@/components/Banner/Banner'
import Flag from '@/components/Flag'
import Offset from '@/components/Offset'
import NavBar from '@/components/NavBar'
import ContactInfos from '@/components/ContactInfos'
import PopupWrap from '@/components/PopupWrap'
import Link from 'next/link'
import Image from 'next/image'

import './contact.css'

import {
  faArrowRight,
  faLocation,
  faPhone,
  faCarSide,
  faTrainTram,
  faBusSimple,
} from '@fortawesome/free-solid-svg-icons'
import ContactInfosDouble from '@/components/ContactInfosDouble'

export const metadata = {
  title: 'Contact | Realise Coaching',
  description:
    'Contactez Realise Coaching pour discuter de votre projet. Retrouvez également toutes les informations pratiques : adresse, parking, accès tram et bus, et prenez rendez-vous directement en ligne avec Lucie Calvayrac.',
  keywords: [
    'contact coaching',
    'Realise Coaching',
    'coaching Strasbourg',
    'coaching scolaire',
    'coaching entreprise',
    'coaching adulte',
    'coach orientation scolaire',
    'coaching professionnel',
    'coaching de carrière',
    'informations pratiques',
    'coaching Illkirch-Graffenstaden',
  ],
  metadataBase: new URL('https://realise-coaching.fr'),
  twitter: {
    card: 'summary',
    title: 'Contact | Realise Coaching',
    description: 'Contactez Realise Coaching pour discuter de votre projet. Retrouvez également toutes les informations pratiques : adresse, parking, accès tram et bus, et prenez rendez-vous directement en ligne avec Lucie Calvayrac.',
    creator: '@luciecalvayrac',
    images: '/images/og/room-og.webp',
  },
  openGraph: {
    title: 'Contact | Realise Coaching',
    description:
      'Prenez contact avec Lucie Calvayrac pour un coaching sur-mesure. Découvrez aussi les informations pratiques : adresse à Illkirch-Graffenstaden, parking gratuit, et accès en tram ou bus.',
    url: 'https://www.realise-coaching.fr/contact',
    type: 'website',
    images: [
      {
        url: '/images/og/room-og.webp',
        width: 1200,
        height: 630,
        alt: 'Bureaux de Realise Coaching',
      },
    ],
  },
}

const doubleContact = [
  {
    txt: "<span class='address infos-title'>Espace coworking La Poule Qui Mue</span><span class='address'>24 Rue des Érables, 67210 OBERNAI</span><span class='address'>Accessibilité PMR</span>",
    link: "https://lapoulequimue.alsace"
  },
  {
    txt: "<span class='address infos-title'>Pôle de santé et de Bien-être</span><span class='address'>158 B, Route de Lyon - 67118 ILLKIRCH</span><span class='address'>2<sup>ème</sup> étage avec ascenseur.</span>",
    link: "https://www.google.com/maps?q=158B+route+de+Lyon,+67400+Illkirch-Graffenstaden"
  }
]

export default function Contact() {
  return (
    <>
      <div className="global-wrapper">
        <header>
          <NavBar />
          <Offset />
          <Banner
            src="room"
            title=""
            subtitle=""
            alt="Les locaux de Realise Coaching"
          />
        </header>
        <main className="contact-wrapper">
          <Flag txt="Discutons de votre projet" level={1} />
          <div className="contact-container">
            <ContactForm />
            <div className="right-container two">
              <h2 className="right-title-two">
                Un rendez-vous qui peut tout changer
              </h2>
              <p className="center">
                Je vous accueille du lundi au vendredi de 8H30 à 19H et le
                samedi de 8H30 à 15H.
              </p>
              <p className="center">
                Pour convenir ensemble de notre première conversation
                téléphonique, je vous invite à me contacter via le formulaire de
                contact en ligne ou par mail ou sur Calendly, mon agenda partagé
                ou simplement sur mon portable.
              </p>
              <p className="center">
                Lors d’un premier contact téléphonique ou en visio d’environ 30
                minutes vous m’exposerez vos attentes et nous verrons comment
                travailler ensemble.
              </p>
              <PopupWrap />
            </div>
          </div>
          <div className="contact-imgs-container">
            <div className="contact-imgs-container-two">
              <div className="contact-imgs-wrapper">
                <div className="contact-img">
                  <Link href="https://lapoulequimue.alsace" target="_blank">
                    <Image
                      src="/images/poule-qui-mue-thumb.webp"
                      alt="La poule qui mue, intérieur"
                      fill={true}
                      priority={false}
                    />
                  </Link>
                </div>
                <div className="contact-img">
                  <Image
                    src="/images/room-thumb.webp"
                    alt="Le bureau Realise Coaching"
                    fill={true}
                    priority={false}
                  />
                </div>
                <div className="contact-img">
                  <Image
                    src="/images/building-thumb.webp"
                    alt="Le batiment Realise Coaching"
                    fill={true}
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <Flag txt="Informations pratiques" color="green" />
          <div className="contact-container two">
            <div className="right-container infos">

              <ContactInfosDouble
                datas={doubleContact}
                icon={faLocation}
              />
              {/* nesting a in a not allowed. Suppressed link : <a href='https://psbeillkirch.wixsite.com/psbe' target='_blank'></a> 
              <ContactInfos
                txt="<span class='address infos-title'>Pôle de santé et de Bien-être</span><span class='address'>158 B, Route de Lyon - 67118 ILLKIRCH</span><span class='address'>2<sup>ème</sup> étage avec ascenseur.</span>"
                icon={faLocation}
                link="https://www.google.com/maps?q=158B+route+de+Lyon,+67400+Illkirch-Graffenstaden"
              />*/}
              <ContactInfos
                txt="<span class='address'>Possibilité de se garer à proximité.</span><span class='address'>Parking gratuit de la Vill’A, accès au 170 Route de Lyon.</span>"
                icon={faCarSide}
                link="https://www.google.fr/maps/place/170+Rte+de+Lyon,+67400+Illkirch-Graffenstaden/@48.523329,7.7044163,17z/data=!3m1!4b1!4m6!3m5!1s0x4796ca1291bad391:0xc153fb8c6fe40d33!8m2!3d48.523329!4d7.7069966!16s%2Fg%2F11c2hc5zy5?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
              />
              <ContactInfos
                txt="<span class='address'>Tram A, terminus Graffenstaden.</span><span class='address'>Bus ligne 62 et 67, arret Graffenstaden</span>"
                icon={faBusSimple}
                link="https://www.cts-strasbourg.eu/fr/se-deplacer/recherche-itineraires/"
              />
              <ContactInfos
                txt="06 82 31 21 68"
                icon={faPhone}
                link="tel:0682312168"
              />
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.42147584507!2d7.70540747644526!3d48.52515397128885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796ca128a7fe04d%3A0x8a7e5db8ecf69cd7!2s158b%20Rte%20de%20Lyon%2C%2067400%20Illkirch-Graffenstaden!5e0!3m2!1sen!2sfr!4v1731749519182!5m2!1sen!2sfr"
                style={{
                  position: 'relative',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ContactPage',
                mainEntity: {
                  '@type': 'Organization',
                  name: 'Realise Coaching',
                  url: 'https://www.realise-coaching.fr',
                  logo: 'https://www.realise-coaching.fr/images/Lucie_logo_sapin_FINAL.png',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+33-6-82-31-21-68',
                    email: 'contact@realise-coaching.fr',
                    contactType: 'Customer Service',
                    areaServed: 'FR',
                    availableLanguage: ['French'],
                  },
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '158 B, Route de Lyon',
                    addressLocality: 'Illkirch-Graffenstaden',
                    postalCode: '67400',
                    addressCountry: 'FR',
                  },
                  sameAs: ['https://www.realise-coaching.fr'],
                },
                description:
                  'Contactez Realise Coaching pour toute demande concernant vos projets de coaching scolaire, professionnel ou personnel. Prenez rendez-vous en ligne ou contactez-nous directement par téléphone ou par email.',
                areaServed: 'France',
                availableChannel: {
                  '@type': 'ServiceChannel',
                  serviceLocation: {
                    '@type': 'PostalAddress',
                    streetAddress: '158 B, Route de Lyon',
                    addressLocality: 'Illkirch-Graffenstaden',
                    postalCode: '67400',
                    addressCountry: 'FR',
                  },
                  availableLanguage: ['French'],
                },
              }),
            }}
          />
        </main>
      </div>
      <div id="modal-root"></div>
    </>
  )
}
