import React from 'react'
import Banner from '@/components/Banner/Banner'
import Flag from '@/components/Flag'
import NavBar from '@/components/NavBar'
import NegFlag from '@/components/NegFlag'
import Offset from '@/components/Offset'
import PictureAndText from '@/components/PictureAndText'
import AosImg from '@/components/AosImg'

export const metadata = {
  title: "Coaching en Milieu Scolaire | Realise Coaching",
  description: "Aidez vos élèves à réussir leur parcours scolaire et professionnel grâce à des ateliers CV, Parcoursup, techniques de recherche de stage et bien plus.",
  keywords: [
    "coaching scolaire",
    "recherche de stage",
    "ateliers CV et lettre de motivation",
    "rédaction Parcoursup",
    "coaching élèves collège lycée",
    "banque de stages",
    "forum métiers",
    "techniques de recherche d'emploi",
    "accompagnement scolaire",
  ],
  openGraph: {
    title: "Coaching en Milieu Scolaire | Realise Coaching",
    description: "Des interventions et ateliers sur mesure pour accompagner vos élèves dans leur orientation et leur réussite professionnelle.",
    url: "https://www.realise-coaching.fr/prestation/coaching-en-milieu-scolaire",
    type: "article",
    images: [
      {
        url: "https://www.realise-coaching.fr/images/og/young-people-og.webp",
        width: 1200,
        height: 630,
        alt: "Coaching en milieu scolaire - Realise Coaching",
      },
    ],
  },
};


export default function CoachingEnMileuScolaire() {
  const color = 'blue'
  // old banner : https://api.realise-coaching.fr/wp-content/uploads/2024/10/4-1280x720-2.webp
  return (
    <>
      <header>
        <NavBar color={color} />
        <Offset />
        <Banner
          src="young-people"
          title="Coaching en Milieu Scolaire"
          subtitle="Un accompagnement sur mesure"
          alt="Jeunes souriants et fleurs"
        />
      </header>
      <main>
        <Flag txt="Boite à outils pour une insertion réussie" color="blue" />
        <PictureAndText
          txt="<p>Une offre modulable en fonction des projets de votre établissement et des besoins de vos élèves.</p><p>Parlons-en !</p>"
          color="blue"
          picture=""
          alt=""
        />
        <div className="text-section">
          <div className="text-container">
            <NegFlag txt="Techniques de recherche de stage" color={color} />
            <p>
              Intervention CV / Lettre de motivation / technique de recherche de stage
            </p>
            <p>
              Intervention en classe entière sur les 3 sujets :
            </p>
            <ul>
              <li className='blue-symbol'>faire son premier CV,</li>
              <li className='blue-symbol'>rédiger une lettre de motivation,</li>

              <li className='blue-symbol'>rédiger une lettre de motivation, chercher un stage ou un job d’été.</li>
            </ul>
            <p>
              En général en collège et lycée ces interventions ont lieu pendant une heure de vie de classe ou sur un créneau dédié dans la semaine.
            </p>
            <p>
              Il peut s’agir juste d’une intervention de « sensibilisation », mais, pour plus d’efficacité, il faut accompagner cette intervention d’un atelier en petit groupe de 10 élèves max dans les 10 jours qui suivent. Les élèves pourront ainsi recevoir une aide personnalisée.
            </p>

            <NegFlag txt="Ateliers CV et LM" color={color} />
            <div className="text-img-container">
              <div className="text-side">
                <p>Animation d’atelier CV et LM en petit groupe</p>
                À l’issue de 2 ateliers sur 3 heures chacun, les élèves savent :
                <ul>
                  <li className='blue-symbol'>Créer leur premier CV</li>
                  <li className='blue-symbol'>
                    Écrire une lettre de motivation à personnaliser ensuite
                  </li>
                  <li className='blue-symbol'>
                    Rechercher une entreprise ou une administration dans laquelle postuler
                  </li>
                  <li className='blue-symbol'>
                    Que dire au téléphone quand on prospecte auprès des entreprises ( ils auront leur pitch par écrit et seront autonome pour passer leurs appels).
                  </li>
                  <li className='blue-symbol'>
                    Il auront chacun passé plusieurs coups de fil pour trouver leur stage sous ma supervision (leur premier contact avec le monde professionnel).
                  </li>
                  <li className='blue-symbol'>
                    Ceux qui le souhaitent auront pu s’entrainer à un entretien en face à face
                  </li>
                </ul>
                <p>A l’issue des ces 2 ateliers, ils sont complètement autonome dans leur recherche de stage ou de job et pourront réutiliser cette méthode tout au long de leur vie professionnelle.</p><p>
                  S’ils avaient des questions à l’issus de l’atelier, j’assure le SAV et leur répond rapidement par mail  ou par téléphone.
                </p>
              </div>
              <div className="img-side-big-height">
                <AosImg
                  src="/images/young-people2.webp"
                  alt="Happy young people"
                  width={450}
                  height={300}
                />
              </div>
            </div>

            <NegFlag txt="Atelier Parcoursup" color={color} />
            <div className="text-img-container">
              <div className="img-side">
                <AosImg
                  style={{ width: '100%', height: 'auto' }}
                  src="/images/parcoursup.webp"
                  alt="Parcoursup logo"
                  width={300}
                  height={200}
                />
              </div>
              <div className="text-side">
                <p>Atelier rédaction de présentation dans Parcoursup.</p>
                <p>Sur un créneau définit avec l’établissement , les élèves (10 max) viennent rédiger leur 4 présentations demandées sur Parcoursup</p>
                <ul>
                  <li className='blue-symbol'>Mes expériences d’encadrement ou d’animation</li>
                  <li className='blue-symbol'>Mon engagement citoyen</li>
                  <li className='blue-symbol'>Mon expérience professionnelle</li>
                  <li className='blue-symbol'>Ouverture au monde</li>
                </ul>
                <p>Pour les écoles qui le demandent, redaction de leur projet de formation motivé ou lettre de motivation</p>
              </div>
            </div>

            <NegFlag txt="Création d'une Banque de Stages" color={color} />
            <p>Mise en place d’une banque de stage au sein d’un établissement</p>
            <p>En partant du constat que 95% des élèves  de 3<sup>ème</sup> et de Seconde trouvent leur stage avec l’aide de leurs parents, ces derniers sont sensibilisés à la difficulté de trouver un lieu de stage.</p>
            <p>Ils sont donc plus réceptifs et sensibles au fait d’accueillir eux même un stagiaire sur leur lieu de travail.</p>
            <p>Un système de recueil  et de transmission d’informations a été testé dans  un établissement du secondaire dans le respect de la protection des données.</p>
            <ul>
              <li className='blue-symbol'>Organisation d’événement sur demande (rencontre emploi, forum des métiers,…)</li>
              <li className='blue-symbol'>Organisation de réunion à thème destinées aux parents ou aux élèves</li>
              <li className='blue-symbol'>Formation de « référents emploi » au sein de l’établissement</li>
            </ul>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Coaching en Milieu Scolaire",
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
              description: "Accompagnement scolaire sur mesure : ateliers CV, rédaction Parcoursup, techniques de recherche de stage et organisation d'événements.",
              audience: {
                "@type": "Audience",
                audienceType: "Students",
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
      </main >
    </>
  )
}
