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
        title={`AlexWeb LTD - ${currentArticle.title}`}
        description={`This is the article about ${currentArticle.title}`}
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
