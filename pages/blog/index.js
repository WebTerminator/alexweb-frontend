import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { Title } from '../../components/Style'
import { getBio, getBlogArticles } from '../../api'
import { objectToArray } from '../../utils'

const Blog = props => {
  const { articles, bio } = props
  const blogArticles = objectToArray(articles)

  return (
    <Layout bio={bio.bio}>
      <Title>
        I am excited by the idea of sharing my knowledge and perhaps inspiring others.
      </Title>
      {blogArticles.map(
        (article, i) => <Card key={`id-${i}`} data={article} />
      )}
    </Layout>
  )
}

Blog.getInitialProps = async () => {
  const articles = await getBlogArticles()
  const bio = await getBio()
  return { articles, bio }
}

export default Blog