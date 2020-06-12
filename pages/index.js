import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
import { NextSeo } from "next-seo";
import { getBio } from "../api";

const Home = ({ profile }) => {
  const description =
    "Alessandro Santese is a freelance web developer with several of experience";

  return (
    <>
      <NextSeo
        title="Alessandro Santese - freelance front end developer"
        description={description}
        openGraph={{
          title: "Home page of AlexWeb LTD",
          type: "webiste",
          description,
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
      <Layout page="home">
        <Main profile={profile} />
      </Layout>
    </>
  );
};

Home.getInitialProps = async () => {
  const bio = await getBio();
  const { profile } = bio;
  return { profile };
};

export default Home;
