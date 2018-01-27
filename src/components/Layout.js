import React from 'react';
import Head from 'next/head';
import Footer from './Footer';

const Layout = ({children}) => (
  <div>
    <Head>
      <title>Håckes cup</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"
      />
    </Head>
    {children}
    <Footer />
  </div>
);

export default Layout;
