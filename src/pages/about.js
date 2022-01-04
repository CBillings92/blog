import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout
      title="About This Site"
      description="More information about this site."
    >
      <h1>About Me</h1>
      <p>This is my about me page</p>
      <Link to="/">&larr; back to home</Link>
    </Layout>
  );
}
