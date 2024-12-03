import Banner from '@/components/Banner/Banner';
import NavBar from '@/components/NavBar';
import Offset from '@/components/Offset';
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <header>
        <NavBar />
        <Offset />
        <Banner
          src="bridge"
          title="Oups !"
          subtitle=""
          alt="Karsten Winegeart - Un pont vu du ciel"
        />
      </header>
      <main>
        <div className="not-found">
          <Image
            className="mobile-nav-logo"
            src={`/images/Realise-logo-carré-green.webp`}
            alt={'Realise coaching logo'}
            width={130}
            height={130}
          />
          <div className='not-found-container'>
            <h1 className="">404</h1>
            <p className="">La page que vous cherchez n’existe pas.</p>
          </div>
        </div>
      </main>
    </>
  );
}