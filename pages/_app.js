import React, { useEffect } from "react";
import Head from "next/head";
import { getBio, isDevelopment } from "../api";
import "../assets/css/style.css";
import { useAnalytics } from "../util/ga";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, bio, router }) => {
  const { init, trackPageViewed } = useAnalytics();
  const props = {
    ...bio,
    pageProps,
  };

  if (!isDevelopment) {
    useEffect(() => {
      init("UA-27666071-1");
      trackPageViewed();
    }, []);
  }

  return (
    <>
      <Head>
        <title>AlexWeb LTD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
        />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...props} key={router.route} />
      </AnimatePresence>
    </>
  );
};

App.getInitialProps = async ({ Component, ctx, router }) => {
  let pageProps;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const bio = await getBio();
  return { pageProps, bio };
};

// Wraps all components in the tree with the data provider
export default App;
