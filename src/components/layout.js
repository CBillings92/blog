import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Seo } from './seo';
import '../styles/global.css';

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      {/* <Header className={header}></Header> */}
      <main style={{ height: '100%' }}>{children}</main>
    </>
  );
}
