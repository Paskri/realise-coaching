import { config } from '@fortawesome/fontawesome-svg-core';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import AosInit from '@/components/AosInit';
config.autoAddCss = false;

import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

export const metadata = {
  robots: 'noindex, nofollow',
  title: 'Realise Coaching',
  description: 'Votre Coach scolaire professionnel sur Strasbourg et ses environs',
}
//

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <AosInit />
      <body>
        {children}
        <Footer />
      </body>
    </html>

  )
}