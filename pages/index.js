import React from 'react'
import Layout from '../components/Layout'
import Main from '../components/Main'
import { getBio, getProjects } from '../api'

const Home = props => {
    const { bio, projects } = props

    return (
        <Layout bio={bio.bio}>
            <Main projects={projects} />
        </Layout>
    )
}

Home.getInitialProps = async () => {
    const projects = await getProjects()
    const bio = await getBio()
    return { bio, projects }
}

export default Home
