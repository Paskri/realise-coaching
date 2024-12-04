
import NavBar from '@/components/NavBar'
import Slider from '@/components/Slider'
import Carrousel from '@/components/Carrousel'
import Services from '@/components/Services'
import Flag from '@/components/Flag'
import PictureAndText from '@/components/PictureAndText'
import Offset from '@/components/Offset'
import Expertise from '@/components/Expertise'
import Partners from '@/components/Partners'

export const metadata = {
  title: 'Coaching Scolaire & Professionnel à Strasbourg - Realise Coaching',
  description:
    'Accompagnement personnalisé pour réussir votre orientation scolaire, booster votre carrière ou améliorer votre épanouissement au travail. Coaching à Strasbourg et environs pour tous les âges.',
  keywords: [
    'coaching orientation scolaire',
    'orientation professionnelle',
    'coaching entreprise',
    'Strasbourg',
    'Épanouissement au travail',
    'Parcoursup',
    'Reconversion professionnelle',
    'Accompagnement personnalisé',
  ],
  openGraph: {
    title: 'Coaching d’Orientation Scolaire & Professionnel - Realise Coaching',
    description:
      'Coaching d’orientation scolaire et professionnel à Strasbourg. RÉALISE Coaching vous accompagne dans votre réussite personnelle et professionnelle.',
    url: 'https://www.realise-coaching.fr/',
    images: [
      {
        url: 'https://www.realise-coaching.fr/images/og/realise-logo-og.webp',
        width: 1200,
        height: 630,
        alt: 'Logo de Realise Coaching et slogan "Un avenir scolaire en main"',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaching Scolaire & Professionnel - Realise Coaching',
    description:
      'Accompagnement pour réussir dans vos projets scolaires et professionnels à Strasbourg.',
    images: ['https://www.realise-coaching.fr/images/Lucie_logo_sapin_FINAL.png'],
  },
};

export default function Home() {
  return (
    <>
      <header>
        <NavBar color="green" />
        <Offset />
        <Slider />
      </header>
      <main>
        <Flag
          txt="Coaching Professionnel et d'Orientation Scolaire sur Strasbourg et ses Environs"
          color="green"
          level={1}
        />
        <PictureAndText
          lOrR="left"
          picture="/images/boussole.webp"
          alt="Boussole"
          txt="<p>De 14 à 70 ans , RÉALISEz vous dans l’activité  qui vous épanouit !</p>"
        />
        <Expertise />

        <Flag txt="Découvrez mon offre personnalisée" color="green" />
        <Services />
        <div className="separator-container">
          <div className="separator"></div>
        </div>
        <Partners />

        <Flag txt="Ce qu’ils en ont pensé…" color="green" />
        <Carrousel />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Realise Coaching",
              url: "https://www.realise-coaching.fr",
              logo: "https://www.realise-coaching.fr/images/Lucie_logo_sapin_FINAL.png",
              sameAs: [
                "https://www.linkedin.com/in/calvayrac-lucie/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-6-82-31-21-68",
                email: "contact@realise-coaching.fr",
                contactType: "Customer Service",
                areaServed: "FR",
                availableLanguage: ["French"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "158 B, Route de Lyon",
                addressLocality: "Illkirch-Graffenstaden",
                postalCode: "67400",
                addressCountry: "FR",
              },
            }),
          }}
        />
      </main>
    </>
  )
}
