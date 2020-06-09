import Layout from "../../components/Layout";
import ArticleShare from "../../components/ArticleShare";
import Article from "../../components/Article";
import { getArticleBySlug } from "../../api";
import { FE_URL } from "../../api";
import { NextSeo } from "next-seo";

const BlogArticle = (props) => {
  const {
    bio,
    pageProps: { article, asPath },
  } = props;

  const currentArticle = article[0];
  return (
    <>
      <NextSeo
        title={`AlexWeb - ${currentArticle.title}`}
        description="This article is a reflection on my journey as a front-end developer so far."
        openGraph={{
          title: `${currentArticle.title}`,
          type: "webiste",
          description:
            "This article is a reflection on my journey as a front-end developer so far.",
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
        <Article
          title={currentArticle.title}
          content={currentArticle.content}
        />
        <ArticleShare url={`${FE_URL}${asPath}`} />
      </Layout>
    </>
  );
};

BlogArticle.getInitialProps = async ({ asPath, query }) => {
  const article = await getArticleBySlug(query.slug);
  return { article, asPath };
};

export default BlogArticle;
