import Banner from '@/components/Banner/Banner'
import NavBar from '@/components/NavBar'
import Offset from '@/components/Offset'
import Image from 'next/image'
import NegFlag from '@/components/NegFlag'
import Flag from '@/components/Flag'

import './mentionslegales.css'

export default function MentionsLegales() {
  return (
    <>
      <header>
        <NavBar />
        <Offset />
        <Banner
          src="bridge"
          title="Mentions légales"
          subtitle=""
          alt="Karsten Winegeart - Un pont vu du ciel"
        />
      </header>
      <main>
        <Flag txt="Realise Coaching" color="green" />
        <div className="legal">
          <Image
            className="mobile-nav-logo"
            src={`/images/Realise-logo-carré-green.webp`}
            alt={'Realise coaching logo'}
            width={130}
            height={130}
          />
          <div className="legal-container">
            <NegFlag txt="Éditeur du site" color="green" />
            <p>Lucie Calvayrac</p>
            <p>Geispolsheim</p>
            <p>contact@realise-coaching.fr</p>
            <p>06.82.31.21.68</p>

            <NegFlag txt="Hebergement" color="green" />
            <p>OVH SAS au capital de 10 000 000 €</p>
            <p>RCS Roubaix – Tourcoing 424 761 419 00045</p>
            <p>Code APE 6202A - N° TVA : FR 22 424 761 419</p>
            <p>Adresse : 2 rue Kellermann - 59100 Roubaix - France.</p>

            <NegFlag txt="Développement web et déploiement" color="green" />
            <p>
              <a href="https://krieg.fr" target="_blank">
                Pascal Krieg - Développeur au K par K
              </a>
            </p>

            <NegFlag txt="Propriété intellectuelle" color="green" />
            <p>
              Le contenu du site Realise-coaching.fr est protégé par le droit
              d’auteur. Toute reproduction ou utilisation est interdite sans
              autorisation.
            </p>

            <NegFlag txt="Données personnelles" color="green" />
            <p>
              Les données collectées via le formulaire de contact sont utilisées
              uniquement pour répondre à votre demande. Vous disposez d’un droit
              d’accès, de rectification et de suppression en nous contactant à{' '}
              <a href="mailto: contact@realise-coaching.fr">
                contact@realise-coaching.fr
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
