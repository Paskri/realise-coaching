import React from 'react'
import ButtonClassicOne from '../buttons/ButtonClassicOne'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faLocation,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import './footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-inner-container column-1">
          <div className="logo-container">
            <Image
              className="footer-logo"
              src={'/images/Lucie_logo_sapin_FINAL.png'}
              alt={'Realise coaching footer logo'}
              width={125}
              height={125}
            />
          </div>
          <div className="footer-line">
            <FontAwesomeIcon
              icon={faLocation}
              style={{
                fontSize: '24px',
                width: '24px',
                height: '24px',
                marginRight: '10px',
              }}
              size="lg"
            />
            <a
              href="https://www.google.com/maps?q=158B+route+de+Lyon,+67400+Illkirch-Graffenstaden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="footer-address">
                STRASBOURG, ILLKIRCH, GEISPOLSHEIM, OBERNAI.
              </span>
            </a>
          </div>
          <div className="footer-line">
            <FontAwesomeIcon
              icon={faPhone}
              style={{
                fontSize: '24px',
                width: '24px',
                height: '24px',
                marginRight: '10px',
              }}
            />
            <a href="tel:0682312168">06.82.31.21.68</a>
          </div>
          <div className="footer-line">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                fontSize: '24px',
                width: '24px',
                height: '24px',
                marginRight: '10px',
              }}
            />
            <a href="mailto:contact@realise-coaching.fr">
              contact@realise-coaching.fr
            </a>
          </div>
        </div>
        <div className="footer-inner-container column-2">
          <h2>Mes offres</h2>
          <Link href="/prestations/coaching-en-milieu-scolaire">
            Coaching en Milieu Scolaire
          </Link>
          <Link href="/prestations/coaching-en-entreprise">
            Coaching en Entreprise
          </Link>
          <Link href="/prestations/coaching-orientation-scolaire">
            Coaching Orientation Scolaire
          </Link>
          <Link href="/prestations/coaching-adulte">Coaching Adulte</Link>
        </div>
        <div className="footer-inner-container column-3">
          <ButtonClassicOne txt={'Contactez-moi'} link={'/contact'} />
        </div>
      </div>
      <div className="footer-bottom">
        <span className="copyright">© Realise Coaching 2024, </span>
        <Link href="/mentions-legales">Mentions Légales</Link>, Développé par:
        <span>
          <Link href="https://krieg.fr" target="_blank">
            Pascal Krieg, développeur au K par K
          </Link>
        </span>
      </div>
    </footer>
  )
}
