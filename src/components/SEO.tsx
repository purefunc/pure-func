import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO() {
  return (
    <Helmet>
      <html lang="en" />
      <title>Pure Func | Web Development Agency</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="The development agency that brings the func!"
      />
    </Helmet>
  );
}
