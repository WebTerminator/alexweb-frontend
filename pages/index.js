import React from 'react'
import Layout from '../components/Layout'
import Main from '../components/Main'
import { getProjects } from '../api'

const Home = props => {
    const { bio, pageProps: { projects } } = props

    return (
        <Layout bio={bio}>
            <Main projects={projects} />
        </Layout>
    )
}

Home.getInitialProps = async () => {
    const projects = await getProjects()
    return { projects }
}

export default Home
