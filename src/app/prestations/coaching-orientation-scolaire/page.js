import React from 'react'
import Banner from '@/components/Banner/Banner'
import Flag from '@/components/Flag'
import NavBar from '@/components/NavBar'
import NegFlag from '@/components/NegFlag'
import Offset from '@/components/Offset'
import PictureAndText from '@/components/PictureAndText'
import Quote from '@/components/Quote'
import Link from 'next/link'
import AosImg from '@/components/AosImg'

export const metadata = {
  title: 'Coaching Orientation Scolaire | Realise Coaching',
  description:
    "Accompagnez vos 14-25 ans dans leurs recherches de stages, projets d'orientation et rédaction Parcoursup avec une coach professionnelle certifiée. Offrez-leur un accompagnement sur mesure pour trouver leur voie.",
  keywords: [
    'coaching orientation scolaire',
    'recherche de stage',
    'coaching adolescent',
    'Parcoursup accompagnement',
    'orientation professionnelle',
    "tests d'orientation",
    "job d'été coaching",
    'Avenir Factory',
    'coaching sur mesure',
  ],
  openGraph: {
    title: 'Coaching Orientation Scolaire | Realise Coaching',
    description:
      'Découvrez une approche unique pour guider les 14-25 ans dans leurs choix professionnels : stages, Parcoursup, orientation et découverte de métiers grâce au coaching sur mesure.',
    url: 'https://www.realise-coaching.fr/prestation/coaching-orientation-scolaire',
    type: 'article',
    images: [
      {
        url: 'https://www.realise-coaching.fr/images/og/children-og.webp',
        width: 1200,
        height: 630,
        alt: "Coaching d'orientation scolaire - Realise Coaching",
      },
    ],
  },
}

export default function OrientationScolaire() {
  return (
    <>
      <header>
        <NavBar color="orange" />
        <Offset />
        <Banner
          src="children"
          title="Coaching Orientation scolaire"
          subtitle="Tout ce dont les 14-25 ans ont besoin"
          alt="Enfants qui jouent dans un pré"
        />
      </header>
      <main>
        <Flag txt="Démarrez du bon pied" color="orange" />
        <PictureAndText
          txt="<p>Vous voulez préserver une relation apaisée avec votre ado ?</p><p>
          Confiez le à une pro du recrutement et de l’orientation scolaire !</p><p>

          <p>Je saurai le guider dans toutes ses recherches :</p>

            <p>
              stage (CV, lettre motivation, conseils sur les techniques de recherche),</p><p>
              rédaction de sa présentation dans Parcoursup,</p><p>
              projet d’orientation🧭, etc.</p>"
          color="orange"
          picture="/images/orientation.webp"
          alt="Quelle direction choisir ?"
        />
        <section className="text-section">
          <div className="text-container">
            <NegFlag txt="Recherche de stage & job d’été" color="orange" />
            <div className="text-img-container">
              <div className="text-side">
                <p>
                  Pack complet pour vous appuyer dans vos recherches, scéance
                  individuelle ou en atelier de 4 participants au maximum.
                </p>
                <p>En présentiel ou en visio.</p>

                <p>
                  Sur 2 ateliers de 3 heures le samedi de 9H30 à 12H30, espacés
                  d’une semaine.
                </p>
                <p>A l’issus de la deuxième séance votre enfant aura :</p>
                <ul>
                  <li className="orange-symbol">réalisé son CV,</li>
                  <li className="orange-symbol">
                    la liste des sociétés dans les secteurs d’activités qui
                    l’intéressent, (j’ai des annuaires d’entreprise à jour)
                  </li>
                  <li className="orange-symbol">rédigé une lettre de motivation à personnaliser ensuite,</li>
                  <li className="orange-symbol">
                    son pitch pour appeler les entreprises pour décrocher son stage,
                  </li>
                  <li className="orange-symbol">passé au moins 3 appels téléphoniques en ma présence,</li>
                  <li className="orange-symbol">et je le préparerai à un entretien.</li>
                </ul>
                <p>
                  Il aura reçu tous les conseils nécessaires à sa recherche et sera
                  totalement autonome pour sa recherche de stage mais aussi de job
                  d’été et d’emploi tout court ! il saura comment et où chercher.
                </p>
                <p>Contactez-moi pour connaître la date des prochaines sessions.</p>
              </div>
              <div className="img-side-big-height">
                <AosImg
                  src="/images/working-students.webp"
                  alt="Projet d'expatriation familiale"
                  width={600}
                  height={400} />
              </div>
            </div>

            <NegFlag txt="Coaching d'orientation scolaire" color="orange" />
            <div className="text-img-container reversed">
              <div className="img-side-big-height">
                <AosImg
                  src="/images/mongolfieres2.webp"
                  alt="Projet d'expatriation familiale"
                  width={450}
                  height={675} />
              </div>
              <div className="text-side">
                <Quote
                  txt="Je vous propose une approche unique en coaching d’orientation scolaire."
                  color="orange"
                />
                <p>
                  Après un parcours de plusieurs RDV sur l’orientation scolaire et
                  professionnelle de votre enfant, je vous propose ensuite d’aller
                  plus loin et d’accompagner votre jeune à tester les 2 ou 3 métiers
                  qui ressortiront du bilan d’orientation.
                </p>
                <p>
                  Lors d’un stage que je l’aiderai à trouver, et d’enquêtes métiers,
                  il viendra se confronter sur le terrain aux métiers qui pourraient
                  lui convenir ! et pourra ainsi affiner son choix !
                </p>
                <Quote txt="Find it & Test it !" color="orange" />
                <p>
                  Pour le Coaching d’Orientation Scolaire, le premier RDV se fait
                  toujours en présence d’au moins 1 parent et du jeune.
                </p>
              </div>
            </div>

            <NegFlag txt="Un partenariat Avenir Factory" color="orange" />
            <div className="text-img-container">
              <div className="text-side">
                <p>Acteur remarquable de l’orientation scolaire</p>
                <p>
                  En rejoignant l’équipe d’Avenir Factory, je mets à votre
                  disposition des outils sur mesure , développés par Catherine
                  Esquer et son équipe.
                </p>
                <p>
                  Un parcours de 6 RDV avec des tests, des discussions, un accès
                  personnel à une plateforme dédiée créée par des professionnels de
                  l’orientation, validée par une psychologue et une neuro psy.
                  l’accès à une base de plus de de 1400 fiches métiers actualisés et
                  des partenariats régionaux.
                </p>
                <p>Découvrez cette offre en détail sur le site Avenir Factory.</p>
              </div>
              <div className="img-side img-centered">
                <Link href="https://www.avenirfactory.fr/" target="__blank">

                  <AosImg
                    style={{ height: 'auto' }}
                    src="/images/af-logo.webp"
                    alt="Projet d'expatriation familiale"
                    width={276}
                    height={100}
                  />
                </Link>
              </div>
            </div>

            <NegFlag
              txt="PARCOUSUP, Accompagnement sur Mesure"
              color="orange"
            />
            <div className="text-img-container reversed">
              <div className="img-side">
                <AosImg
                  src="/images/happy-students.webp"
                  alt="Projet d'expatriation familiale"
                  width={450}
                  height={300}
                />
              </div>
              <div className="text-side">
                <p>Conseils pour l’utilisation de la plateforme PARCOURSUP.</p>
                <p>
                  Accompagnement sur mesure dans la rédaction de vos 4 paragraphes
                  de présentation obligatoires ainsi que pour les éventuelles
                  lettres de motivation.
                </p>
                <p>
                  Les élèves de terminale sont souvent en manque d’inspiration pour
                  se présenter et ont du mal à valoriser leurs expériences.
                </p>
                <p>
                  À travers un questionnement simple, je les guide dans leur
                  rédaction.
                </p>
              </div>
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Coaching Orientation Scolaire',
              provider: {
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
              },
              areaServed: 'France',
              description:
                "Accompagnement des jeunes (14-25 ans) pour leurs projets d'orientation, recherche de stage, rédaction Parcoursup et tests d'orientation.",
              audience: {
                '@type': 'EducationalAudience',
                educationalRole: 'student',
              },
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
    </>
  )
}
