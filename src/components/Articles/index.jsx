'use client'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import FeaturedImage from '../FeaturedImg'
import './article.css'
import { PulseLoader } from 'react-spinners'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Articles() {
  const [isLoading, setIsLoading] = useState(true)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const { data, error } = useSWR(`${apiUrl}/posts`, fetcher)

  useEffect(() => {
    if (data) {
      setIsLoading(false)
    }
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
      {!isLoading ? (
        data.map((article, index) => {
          return (
            <div className="article" key={`${article.title.rendered}-${index}`}>
              <h2>{article.title.rendered}</h2>
              <span>{formatDate(article.date)}</span>

              <div
                className={`text-img-container${
                  index % 2 !== 0 ? '' : ' reversed'
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
