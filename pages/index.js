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
          title: "Home page",
          description:
            "This is the company website where the user will discover AlexWeb latest work and news",
          images: [
            {
              url: "/facebook.png",
              width: 1200,
              height: 1200,
              alt: "AlexWeb LTD logo",
            },
          ],
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
