import React from 'react'
import ReactMarkdown from 'react-markdown'
import { ProjectWrapper } from './style'

const Project = ({ source: { details } }) =>
  <ProjectWrapper>
    <ReactMarkdown linkTarget="_blank" source={details} />
  </ProjectWrapper>

export default Project