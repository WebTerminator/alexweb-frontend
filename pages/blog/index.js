import React from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { Title } from "../../components/Style";
import { getBlogArticles } from "../../api";
import { objectToArray } from "../../utils";
import { NextSeo } from "next-seo";

const Blog = (props) => {
  const {
    pageProps: { articles },
  } = props;
  const blogArticles = objectToArray(articles);

  return (
    <>
      <NextSeo
        title="AlexWeb LTD - blog"
        description="This is the blog of Alessandro Santese"
        openGraph={{
          title: "Blog",
          type: "webiste",
          description: "Collection of articles",
          images: [
            {
              url:
                "https://res.cloudinary.com/ltbzulwym/image/upload/v1591101650/facebook_2c545fac50.png",
              width: 1200,
              height: 1200,
              alt: "AlexWeb log",
            },
          ],
        }}
        twitter={{
          handle: "@AsWeb85",
          cardType: "summary",
          site: "@AsWeb85",
        }}
      />
      <Layout bio={props.bio}>
        <Title>
          I am excited by the idea of sharing my knowledge and perhaps inspiring
          others.
        </Title>
        {blogArticles.map((article, i) => (
          <Card key={`id-${i}`} data={article} />
        ))}
      </Layout>
    </>
  );
};

Blog.getInitialProps = async () => {
  const articles = await getBlogArticles();
  return { articles };
};

export default Blog;
