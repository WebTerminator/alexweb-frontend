import React from 'react'
import Head from 'next/head'
import "../assets/css/style.css"

const App = ({ Component, pageProps }) =>
  <>
    <Head>
      <title>AlexWeb LTD</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>

// Wraps all components in the tree with the data provider
export default App;
