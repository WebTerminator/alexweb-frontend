import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon
} from 'react-share'
import PropTypes from 'prop-types'
import { Title, Wrapper } from './style'

const ArticleShare = ({ url }) =>
  <Wrapper>
    <Title>
      Share this article on:
    </Title>
    <TwitterShareButton url={url}>
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
    <FacebookShareButton url={url}>
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
    <LinkedinShareButton url={url}>
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>
  </Wrapper>

ArticleShare.propTypes = {
  url: PropTypes.string.isRequired
}

export default ArticleShare