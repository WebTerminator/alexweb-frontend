import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
import { NextSeo } from "next-seo";

const Home = (props) => {
  const { bio, profile } = props;
  return (
    <>
      <NextSeo
        description="Alessandro Santese is a freelance web developer with 10 years of experience"
        openGraph={{
          title: "Home page of AlexWeb LTD",
          type: "webiste",
          description:
            "Alessandro Santese is a freelance web developer with 10 years of experience",
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
      <Layout page="home" bio={bio}>
        <Main profile={profile} />
      </Layout>
    </>
  );
};

export default Home;
