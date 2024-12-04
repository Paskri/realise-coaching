import React from 'react'
import Banner from '@/components/Banner/Banner'
import Flag from '@/components/Flag'
import NavBar from '@/components/NavBar'
import Offset from '@/components/Offset'
import PictureAndText from '@/components/PictureAndText'
import NegFlag from '@/components/NegFlag'
import AosImg from '@/components/AosImg'

import './entreprise.css'

export const metadata = {
  title: "Coaching en Entreprise | Realise Coaching",
  description: "Accompagnez vos collaborateurs avec un coaching professionnel adapté : retours de congés, expatriations, transitions ou départs à la retraite.",
  keywords: [
    "coaching en entreprise",
    "accompagnement retour congé maternité",
    "coaching retour congé longue maladie",
    "coaching expatriation",
    "coaching départ retraite",
    "coaching professionnel entreprise",
    "retour expatriation",
    "transition professionnelle",
    "bien-être collaborateur",
  ],
  openGraph: {
    title: "Coaching en Entreprise | Realise Coaching",
    description: "Facilitez les transitions professionnelles de vos collaborateurs : retours de congés, expatriations et départs. Un coaching sur mesure pour votre entreprise.",
    url: "https://www.realise-coaching.fr/prestation/coaching-en-entreprise",
    type: "article",
    images: [
      {
        url: "https://www.realise-coaching.fr/images/og/bridge-og.webp",
        width: 1200,
        height: 630,
        alt: "Coaching en entreprise - Realise Coaching",
      },
    ],
  },
};


export default function Entreprise() {
  const color = 'red'
  return (
    <>
      <header>
        <NavBar color={color} />
        <Offset />
        <Banner
          src="bridge"
          title="Coaching en Entreprise"
          subtitle="Facilitez le retour ou le départ de vos collaborateurs H/F"
          alt="Karsten Winegeart - Un pont vu du ciel"
        />
      </header>
      <main>
        <Flag txt="Chaque étape est importante" color={color} />
        <PictureAndText
          picture="/images/boussole.webp"
          alt="Illustration à trouver"
          color={color}
          txt="<p>Avec un accord tripartite définissons ensemble le cadre de ce coaching.</p><p>
              Avec des séances en visio, ou dans mes locaux, ou enfin, dans l’entreprise même.</p><p>
              Accompagnez avec bienveillance et efficacité vos collaborateurs dans leur retour en entreprise ou leur départ.</p>"
        />
        <section className="text-section">
          <div className="text-container">
            <NegFlag txt="Accompagner un retour de congé maternité ou un congé
                  parental" color="red" />
            <div className="text-img-container">
              <div className="text-side">
                <p>Ses priorités ou ses capacités physiques ont peut-être changées, et doivent être reconsidérées et prises en compte dans l’adaptation de son poste et de son rythme de travail.</p>
              </div>
              <div className="img-side">
                <AosImg
                  src="/images/retour-conge-mat.webp"
                  alt="Famille heureuse"
                  width={450}
                  height={300}
                />
              </div>
            </div>

            <NegFlag txt="Accompagner un retour de congé longue maladie" color="red" />
            <p>Une écoute active et bienveillante le rassurera et lui permettra d’envisager l’avenir sereinement dans votre entreprise.</p>
            <p>Ses priorités ou ses capacités physiques ont peut-être changées, et doivent être reconsidérées et prises en compte dans l’adaptation de son poste et de son rythme de travail.</p>

            <NegFlag txt="Accompagner un retour de congés sabbatique" color="red" />
            <div className="text-img-container reversed">
              <div className="img-side">
                <AosImg
                  src="/images/conge-sabbatique.webp"
                  alt="Partir à l'aventure"
                  width={450}
                  height={300}
                />
              </div>
              <div className="text-side">
                <p>Une écoute active et bienveillante le rassurera et lui permettra d’envisager l’avenir sereinement dans votre entreprise.</p>
              </div>
            </div>

            <NegFlag txt="Coaching expatriation ou retour d’expatriation" color="red" />
            <div className="text-img-container">
              <div className="text-side">
                <p>De même, accompagner un cadre et sa famille dans son projet d’expatriation que ce soit sur un départ ou une arrivée est primordial pour que l’expérience soit bien vécue.</p>
              </div>
              <div className="img-side">
                <AosImg
                  src="/images/expat.webp"
                  alt="Expatriation"
                  width={450}
                  height={300}
                />
              </div>
            </div>

            <NegFlag txt="Coaching « 3<sup>ème</sup> Vie »" color="red" />
            <p>Enfin, une entreprise a une dernière occasion d’être reconnaissante envers un salarié qui part à la retraite en lui offrant un coaching pour l’aider à préparer cette nouvelle tranche de vie qui est un véritable changement.</p>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Coaching en Entreprise",
              provider: {
                "@type": "Organization",
                name: "Realise Coaching",
                url: "https://www.realise-coaching.fr",
                logo: "https://www.realise-coaching.fr/images/Lucie_logo_sapin_FINAL.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+33-6-82-31-21-68",
                  email: "contact@realise-coaching.fr",
                  contactType: "Customer Service",
                  areaServed: "FR",
                  availableLanguage: ["French"],
                },
              },
              areaServed: "France",
              description: "Coaching sur mesure pour accompagner les transitions professionnelles : retour de congés, expatriations, et départs en retraite.",
              audience: {
                "@type": "Audience",
                audienceType: "Organization",
              },
              availableChannel: {
                "@type": "ServiceChannel",
                serviceLocation: {
                  "@type": "PostalAddress",
                  streetAddress: "158 B, Route de Lyon",
                  addressLocality: "Illkirch-Graffenstaden",
                  postalCode: "67400",
                  addressCountry: "FR",
                },
                availableLanguage: ["French"],
              },
            }),
          }}
        />

      </main>
    </>
  )
}
