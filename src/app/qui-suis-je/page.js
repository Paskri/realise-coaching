import Banner from '@/components/Banner/Banner'
import NavBar from '@/components/NavBar'
import Menu from '@/components/NavBar'
import Offset from '@/components/Offset'
import Image from 'next/image'
import React from 'react'
import './whoiam.css'
import Link from 'next/link'
import NegFlag from '@/components/NegFlag'
import AosImg from '@/components/AosImg'

export const metadata = {
  title: 'Qui suis-je ? | Realise Coaching',
  description:
    "Découvrez Lucie Calvayrac, coach professionnel et d'orientation scolaire certifiée RNCP. Forte de 20 ans d'expérience en recrutement et passionnée par l'épanouissement humain, elle vous accompagne dans votre réussite professionnelle et personnelle.",
  keywords: [
    'Lucie Calvayrac',
    'coach professionnel',
    'coach orientation scolaire',
    'certifiée RNCP',
    'coaching Strasbourg',
    'accompagnement professionnel',
    'coaching adolescent',
    'coaching Parcoursup',
    'recrutement cadres dirigeants',
  ],
  openGraph: {
    title: 'Qui suis-je ? | Realise Coaching',
    description:
      "Rencontrez Lucie Calvayrac, une coach professionnelle certifiée RNCP spécialisée en orientation scolaire et professionnelle. Avec plus de 20 ans d'expérience, elle met ses compétences au service de votre épanouissement.",
    url: 'https://www.realise-coaching.fr/qui-suis-je',
    type: 'profile',
    profile: {
      firstName: 'Lucie',
      lastName: 'Calvayrac',
      gender: 'female',
    },
    images: [
      {
        url: 'https://www.realise-coaching.fr/images/lucie-portrait.jpg',
        alt: 'Portrait de Lucie Calvayrac',
      },
    ],
  },
}

export default function QuiSuisJe() {
  return (
    <>
      <header>
        <NavBar />
        <Offset />
        <Banner
          src="natal-landscape"
          title="Qui suis-je ?"
          subtitle=""
          alt="Paysage devant la maison natale"
        />
      </header>
      <main className="whoiam">
        <section className="whoiam-image-container">
          <AosImg
            src="/images/Lucie-Calvayrac.webp"
            width={250}
            height={300}
            alt="Portrait de Lucie Calvayrac"
          />
          <h2>Lucie Calvayrac</h2>
          <span className="whoiam-subtitle">
            {' '}
            Coach professionnel et d’orientation scolaire
          </span>
          <div className="separator"></div>
        </section>
        <section className="text-section">
          <div className="text-container">
            <div>
              <p className="first-p">
                Diplômée de l’école de commerce L’ESC Clermont Business
                School que j’ai intégrée à l’issue de 2 années de classe prépa
                ECG ( ex prépa HEC), je me suis spécialisée en ressources
                humaines .
              </p>
              <p>
                Experte du recrutement de cadres dirigeants depuis 20 ans, j’ai
                effectué plus de 2 000 recrutements dans tous secteurs
                d’activités en France et à l’international.
              </p>
              <p>
                J’ai complété mes connaissances en suivant la formation de Coach
                professionnel avec le centre de formation Évolution &
                Perspectives. Depuis août 2024,je suis Coach
                Professionnel certifiée RNCP et supervisée. J’ai également suivi
                une formation Process Com et serai aussi bientôt certifiée Coach
                pour adolescents et jeunes adultes.
              </p>
              <p>
                Depuis longtemps passionnée par l’humain et l’épanouissement
                dans le travail ou dans une activité passion, je suis convaincue
                que chacun peut se réaliser dans un ou plusieurs métiers, un
                univers professionnel ou un statut professionnel. « Il faut
                juste » trouver celui qui vous correspond. 😉
              </p>
              <p>
                Sous l’enseigne REALISE et avec la marque Avenir Factory,
                j’accompagne des jeunes, dès la 4<sup>ème</sup>, des étudiants,
                des adultes en activité, et ou en expatriation, de futurs
                retraités, … à découvrir, définir et décrocher LE job ,
                l’activité qui vous révèle.
              </p>
              <p>
                Maman de 2 enfants de 14 et 18 ans, investie dans les
                associations de parents d’élèves, je suis sensible à
                l’orientation des jeunes et à leurs interrogations quant aux
                différentes filières. Parce que je pense que chaque élève mérite
                d’être conseillé et guidé dans sa recherche d’orientation,
                j’interviens depuis plusieurs années en collège et lycée.
              </p>
              <p>
                Depuis plus de 7 ans, j’accompagne des collégiens dans leur
                recherche de stage de 3<sup>ème</sup>.{' '}
              </p>
              <p>
                En lycée, j’ai apporté mon aide à la direction pour la création
                d’une banque de stages pour faciliter les recherches de stage
                pour les élèves de seconde.
              </p>
              <p>
                J’ai également animé des ateliers pour les élèves de terminales
                en manque d’inspiration pour rédiger les 4 textes de
                présentation et leurs lettres de motivation sur Parcoursup.
              </p>
              <p>
                Enfin, partenaire de l’UNISTRA , université de Strasbourg ,
                j’interviens sur l’évènement « Prêt pour l’Emploi » en faisant
                passer des simulations d’entretien d’embauche, et j’anime des
                interventions auprès du service Alumni sur des sujets comme :
                Comment faire la différence dans un process de recrutement ? ou
                encore Comment valoriser ses loisirs dans son CV ?{' '}
              </p>
              <NegFlag txt="Mes valeurs à votre service" color="green" />
              <div className="tag-container">
                <span className="values-tag green">Bienveillance</span>
                <span className="values-tag green">Confidentialité</span>
                <span className="values-tag green">Écoute Active</span>
                <span className="values-tag green">Déontologie</span>
                <span className="values-tag green">Réactivité</span>
                <span className="values-tag green">Enthousiasme</span>
                <span className="values-tag green">Adaptabilité</span>
              </div>
            </div>
            <Link
              href="https://www.linkedin.com/in/calvayrac-lucie/"
              target="_blank"
              className="linkedin-link"
            >
              <p>Pour plus de détails, consultez mon profil</p>
              <AosImg
                src="images/linkedin.webp"
                width={154}
                height={38}
                alt="Logo LinkedIn"

              />
            </Link>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Lucie Calvayrac',
              jobTitle: "Coach d'orientation scolaire et professionnel",
              description:
                "Coach certifiée spécialisée dans l'accompagnement des individus et des entreprises pour les aider à atteindre leurs objectifs personnels et professionnels.",
              url: 'https://www.realise-coaching.fr/qui-suis-je',
              image:
                'https://www.realise-coaching.fr/images/Lucie_portrait.jpg', // Remplacez par le chemin réel de votre image
              worksFor: {
                '@type': 'Organization',
                name: 'Realise Coaching',
                url: 'https://www.realise-coaching.fr',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '158 B, Route de Lyon',
                addressLocality: 'Illkirch-Graffenstaden',
                postalCode: '67400',
                addressCountry: 'FR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+33-6-82-31-21-68',
                email: 'contact@realise-coaching.fr',
                contactType: 'Customer Service',
                areaServed: 'FR',
                availableLanguage: ['French'],
              },
              sameAs: [
                'https://www.linkedin.com/in/lucie-calvayrac', // Remplacez ou ajoutez vos profils sociaux
                'https://www.facebook.com/realisecoaching',
              ],
            }),
          }}
        />
      </main>
    </>
  )
}
