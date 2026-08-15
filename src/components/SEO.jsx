import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, schema, url }) {
  const siteUrl = 'https://riyadh-ac-cleaning.example.com'; // Change this to your actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags (for Social Media sharing) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />

      {/* Schema.org JSON-LD (for Google Rich Snippets) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
