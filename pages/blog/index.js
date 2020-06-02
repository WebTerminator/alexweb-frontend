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
        description="This is the blog of AlexWeb LTD"
        openGraph={{
          title: "AlexWeb LTD website",
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
