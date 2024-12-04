import Banner from '@/components/Banner/Banner'
import NavBar from '@/components/NavBar'
import Offset from '@/components/Offset'
import Articles from '@/components/Articles'

import './actualites.css'

export const metadata = {
  title: 'Actualités | Nom du Site',
  description: 'Découvrez les dernières actualités et articles sur [votre thématique ou entreprise].',
  openGraph: {
    title: 'Actualités | Nom du Site',
    description: 'Découvrez les dernières actualités et articles sur [votre thématique ou entreprise].',
    url: 'https://realise-coaching.fr/actualites',
    type: 'website',
    images: [
      {
        url: 'https://realise-coaching.fr/images/og/bridge-og.webp',
        width: 1200,
        height: 630,
        alt: 'Bannière des actualités',
      },
    ],
  },
};

export default function Actualites() {
  return (
    <>
      <header>
        <NavBar />
        <Offset />
        <Banner
          src="bridge"
          title="Actualités"
          subtitle="News, annonces, évènements ..."
          alt="Karsten Winegeart - Un pont vu du ciel"
        />
      </header>
      <main className='actus'>
        <div className="text-section">
          <div className="text-container">
            <Articles />
          </div>
        </div>
      </main>
    </>
  )
}
