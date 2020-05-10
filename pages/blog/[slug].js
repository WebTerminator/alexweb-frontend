import Layout from '../../components/Layout'
import ArticleShare from '../../components/ArticleShare'
import Article from '../../components/Article'
import { getArticleBySlug } from '../../api'

const BlogArticle = props => {
  const {
    bio,
    pageProps: {
      article,
      query: { slug }
    }
  } = props

  const currentArticle = article[0]
  return (
    <Layout bio={bio}>
      <Article title={currentArticle.title} content={currentArticle.content} />
      <ArticleShare url={`${process.env.API_URL}/blog/${slug}`} />
    </Layout>
  )
}

BlogArticle.getInitialProps = async ({ query }) => {
  const article = await getArticleBySlug(query.slug)
  console.log(article, query)
  return { article, query }
}

export default BlogArticle
