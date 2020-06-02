import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
import { getProjects } from "../api";
import { NextSeo } from "next-seo";

const Home = (props) => {
  const {
    bio,
    pageProps: { projects },
  } = props;

  return (
    <>
      <NextSeo
        openGraph={{
          title: "Home page of AlexWeb LTD",
          type: "webiste",
          description:
            "AlexWeb company's website showcasing the latest work and news",
          images: [
            {
              url:
                "https://res.cloudinary.com/ltbzulwym/image/upload/v1591101650/facebook_2c545fac50.png",
              width: 1200,
              height: 1200,
              alt: "AlexWeb LTD logo",
            },
          ],
        }}
        twitter={{
          handle: "@AsWeb85",
          cardType: "summary",
          site: "@AsWeb85",
        }}
      />
      <Layout bio={bio}>
        <Main projects={projects} />
      </Layout>
    </>
  );
};

Home.getInitialProps = async () => {
  const projects = await getProjects();
  return { projects };
};

export default Home;
