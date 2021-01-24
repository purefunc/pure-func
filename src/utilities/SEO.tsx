import React from 'react'
import { Helmet } from 'react-helmet-async'

type Props = {
  title?: string
  description?: string
}

export function SEO({ title = '', description = '' }: Props) {
  const pageTitle = title || 'Web Development Agency'
  const pageDescription = description || 'The development agency that brings the func!'

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle} | Pure Func</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pageDescription} />
    </Helmet>
  )
}
