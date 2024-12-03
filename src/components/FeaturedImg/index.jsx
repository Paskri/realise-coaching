import React from 'react'
import AosImg from '../AosImg'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function FeaturedImage(props) {
  const { featured } = props
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const { data, error } = useSWR(
    featured !== 0 ? `${apiUrl}/media/${featured}` : null,
    fetcher
  )

  if (error) return <p>Erreur lors du chargement de l’image.</p>

  return (
    <>
      {featured !== 0 && data ? (
        <AosImg
          src={data.source_url}
          alt={data.alt_text}
          width={450}
          height={300}
        />
      ) : (
        ''
      )}
    </>
  )
}
