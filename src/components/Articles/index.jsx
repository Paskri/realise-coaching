'use client'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import FeaturedImage from '../FeaturedImg'
import './article.css'
import { PulseLoader } from 'react-spinners'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const metadata = {
  title: 'Actualités | Realise coaching',
  description:
    'Découvrez les dernières actualités et articles sur mes coaching, mes interventions, etc.',
  openGraph: {
    title: 'Actualités | Realise coaching',
    description:
      'Découvrez les dernières actualités et articles sur mes coaching, mes interventions, etc.',
    url: 'https://realise-coaching.fr/actualites',
    type: 'website',
    images: [
      {
        url: 'https://realise-coaching.fr/images/banners/bridge-1280.webp',
        width: 1280,
        height: 400,
        alt: 'Bannière des actualités',
      },
    ],
  },
}

export default function Articles() {
  const [isLoading, setIsLoading] = useState(true)
  const [structuredData, setStructuredData] = useState(null)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const { data, error } = useSWR(`${apiUrl}/posts`, fetcher)

  /* *** Fetching featured media for each articles *** */
  async function fetchMedia(mediaId) {
    if (!mediaId) return null
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${apiUrl}/media/${mediaId}`)
    if (!response.ok) return null
    const mediaData = await response.json()
    return mediaData.source_url
  }

  useEffect(() => {
    if (data) {
      setIsLoading(false)
    }
    async function fetchData() {
      if (data) {
        const articlesWithMedia = await Promise.all(
          data.map(async (article) => {
            const imageDatas = await fetchMedia(article.featured_media)
            if (!imageDatas) return article
            return {
              ...article,
              featured_media_url: imageDatas,
            }
          })
        )
        setStructuredData({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Actualités | Nom du Site',
          description:
            'Découvrez les dernières actualités et articles sur [votre thématique ou entreprise].',
          mainEntity: articlesWithMedia.map((article) => {
            return {
              '@type': 'NewsArticle',
              headline: article.title.rendered,
              datePublished: article.date,
              image: article.featured_media_url || '',
              author: {
                '@type': 'Person',
                name: 'Lucie Calvayrac',
              },
            }
          }),
        })
      }
    }
    fetchData()
  }, [data])

  function formatDate(isoDate) {
    const date = new Date(isoDate)
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
    return `Publié le ${date.toLocaleDateString('fr-FR', options)}`
  }

  return (
    <>
      {structuredData && (
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      {!isLoading ? (
        data.map((article, index) => {
          return (
            <div className="article" key={`${article.title.rendered}-${index}`}>
              <h2>{article.title.rendered}</h2>
              <span className="date">{formatDate(article.date)}</span>

              <div
                className={`text-img-container${
                  index % 2 !== 0 ? ' reversed' : ''
                }`}
              >
                {index % 2 === 0 && parseInt(article.featured_media) !== 0 ? (
                  <div className="img-side">
                    <FeaturedImage featured={article.featured_media} />
                  </div>
                ) : (
                  ''
                )}
                <div
                  className={`text-side${
                    article.featured_media === 0 ? ' article-large' : ''
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: article.content.rendered,
                  }}
                ></div>
                {index % 2 !== 0 && parseInt(article.featured_media) !== 0 ? (
                  <div className="img-side">
                    <FeaturedImage featured={article.featured_media} />
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          )
        })
      ) : (
        <div className="loader-container">
          <PulseLoader size={10} color={'#175a48'} speedMultiplier={0.8} />
        </div>
      )}
    </>
  )
}
