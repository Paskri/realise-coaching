import Banner from '@/components/Banner/Banner'
import Flag from '@/components/Flag'
import NavBar from '@/components/NavBar'
import Offset from '@/components/Offset'
import React from 'react'
import './coachingadulte.css'
import PictureAndText from '@/components/PictureAndText'
import NegFlag from '@/components/NegFlag'
import Image from 'next/image'
import AosImg from '@/components/AosImg'

export const metadata = {
  title: 'Realise Coaching - Coaching 25 ans et plus',
  description: 'Découvrez mon offre de coaching pour plus de 25 ans',
}

export default function CoachingAdulte() {
  const color = 'purple'
  return (
    <>
      <header>
        <NavBar color={color} />
        <Offset />
        <Banner
          src="barque"
          title="Coaching Adulte"
          subtitle="Redonnez du sens à votre carrière"
          alt="Une barque sur un lac"
        />
      </header>
      <main>
        <Flag txt="Trouvez votre cap et réalisez vos ambitions" color={color} />
        <PictureAndText
          txt="<p>Vous avez envie de changement dans votre vie professionnelle mais vous ne savez pas quelle direction prendre ?</p> 
          <p>Vous reprenez votre emploi aprés plusieurs mois d'arrêt ?</p>
          <p>Bientôt en retraite,  préparons ensemble cette prochaine étape.</p>
          <p>Vous avez déjà réfléchi au poste de vos rêves  et avez juste besoin de de conseils pour dynamiser votre candidature ? </p>"
          picture="/images/boussole.webp"
          color="purple"
          alt="Boussole"
        />
        <section className="text-section">
          <div className="text-container">
            <NegFlag
              txt="Coaching en épanouissement professionnel"
              color="purple"
            />
            <div className="text-img-container">
              <div className="text-side">
                <p>
                  Vous ne trouvez plus de sens dans votre job actuel, il ne
                  correspond plus à vos attentes, il ne vous fait plus vibrer.
                </p>
                <p>
                  Vous avez envie de de nouveaux défis, besoin de nouveaux
                  challenges, et de découvrir autre chose…. mais vous avez besoin
                  d’être accompagné.
                </p>
                <p>
                  Définissons ensemble votre prochaine vie professionnelle, à
                  travers un coaching en 8 étapes.
                </p>              </div>
              <div className="img-side">
                <AosImg
                  src="/images/ecran-paysage.webp"
                  alt="Espace de travail serein"
                  width={450}
                  height={300}
                />
              </div>
            </div>


            <NegFlag txt="Dynamisez votre candidature" color="purple" />
            <div className="text-img-container reversed">
              <div className="img-side">
                <AosImg
                  src="/images/cadres-dynamiques.webp"
                  alt="Cadres dynamiques"
                  width={450}
                  height={300}
                />
              </div>
              <div className="text-side">
                <p>
                  Dépoussiérez votre CV , optimisez vos lettres de motivation,
                  rendez votre profil attractif sur les sites d’emploi, LinkedIn,…
                </p>
                <p>
                  Besoin d’être guidé dans votre « opération coup de jeune » dans
                  vos candidatures ?
                </p>
                <p>
                  Depuis 20 ans, c’est mon métier d’évaluer des compétences,
                  d’analyser des lettres de motivation, de décortiquer des CV et de
                  mener des entretiens de recrutement.
                </p>
                <p>
                  Je vous propose un accompagnement sur mesure, en quelques séances
                </p>
              </div>

            </div>
            <NegFlag
              txt="Besoin de préparer un entretien d’embauche ?"
              color="purple"
            />
            <p>
              Que ce soit en vu de l’entretien annuel d’évaluation avec votre
              N+1, d’un entretien en vue d’une évolution au sein de votre
              entreprise actuelle ou pour décrocher un nouveau job, vous ne
              pouvez pas y aller sans préparation.
            </p>
            <p>
              Pour éviter d’être rattrapé par ses émotions, son stress ….et pour
              arriver serein et plein d’assurance, je vous propose une séance
              complète avec préparation mentale/gestion du stress et une
              simulation d’entretien.
            </p>
            <ul>
              <li className="purple-symbol">Dans quel état d’esprit arriver à l’entretien ?</li>
              <li className="purple-symbol">Que dire et comment se comporter pendant la rencontre ?</li>
              <li className="purple-symbol">Comment bien conclure son entretien ?</li>
              <li className="purple-symbol">Comment sortir du lot ?</li>
              <li className="purple-symbol">Quelle attitude adopter en attendant la réponse ?</li>
            </ul>

            <NegFlag txt="Coaching « 3<sup>ème</sup> Vie »" color="purple" />
            <div className="text-img-container">
              <div className="text-side">
                <p>
                  Votre vie va entrer dans une nouvelle phase.
                  D’&quot;Actif/Active&quot; votre statut va etre celui d’un(e)
                  retraité(e) Changer de rythme, sortir du monde professionnel se
                  prépare.
                </p>
                <p>
                  Imaginons ensemble votre nouvelle vie et votre nouveau rythme.
                </p>
              </div>
              <div className="img-side">
                <AosImg
                  src="/images/retraites.webp"
                  alt="Des retraités qui rient"
                  width={450}
                  height={300}
                />
              </div>
            </div>



            <NegFlag txt="Coaching retour à l’emploi" color="purple" />
            <p>
              Reprendre un rythme de vie professionnelle aprés plusieurs mois
              d’arrêt, peut être une période difficile et stressante.
            </p>
            <p>
              Pour une reprise en toute sérénité, je vous propose un
              accompagnement bienveillant au cours duquel vous pourrez exprimer
              toutes vos craintes et interrogations.
            </p>
            <p>
              À travers un questionnement et des exercices vous trouverez en
              vous les ressources pour passer ce cap de la reprise et réfléchir
              aux adaptations qui vous semblent nécessaires pour revenir
              travailler avec joie.
            </p>
            <NegFlag
              txt="Coaching familial projet d’expatriation"
              color="purple"
            />
            <div className="text-img-container reversed">
              <div className="img-side">
                <AosImg
                  src="/images/expat-famille.webp"
                  alt="Projet d'expatriation familiale"
                  width={450}
                  height={300}
                />
              </div>
              <div className="text-side">
                <p>
                  Une mutation professionnelle d’un des 2 parents , qu’elle ait
                  lieu en France ou à l’international, entraîne des conséquences
                  pour toute la famille.
                </p>
                <p>
                  Pour que tous les membres concernés par ce déménagement ou
                  cette nouvelle organisation soient accompagnés et puissent en
                  parler ouvertement et trouver des réponses réconfortantes, je
                  vous propose un accompagnement sur mesure avec des séances
                  collectives et individuelles.
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
              name: 'Coaching Adulte',
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
                'Coaching professionnel pour adultes : redonnez du sens à votre carrière, optimisez vos candidatures et préparez-vous pour réussir vos entretiens.',
              audience: {
                '@type': 'Audience',
                audienceType: 'Adult',
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
