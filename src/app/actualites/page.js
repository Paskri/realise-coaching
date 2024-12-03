import Banner from '@/components/Banner/Banner'
import NavBar from '@/components/NavBar'
import Offset from '@/components/Offset'
import './actualites.css'
import Articles from '@/components/Articles'


//https://api.realise-coaching.fr/wp-json/wp/v2/posts
export default function Actualites() {


  return (
    <>
      <header>
        <NavBar />
        <Offset />
        <Banner
          src="bridge"
          title="Realise Coaching"
          subtitle="Actualités"
          alt="Karsten Winegeart - Un pont vu du ciel"

        />
      </header>
      <main className='actus'>
        <section className="text-section">
          <div className="text-container">
            <Articles />
          </div>
        </section>

      </main>
    </>
  )
}
