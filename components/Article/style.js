import styled from 'styled-components'

export const Wrapper = styled.div`
  h2 {
    margin: 50px 0 10px 0;
    font-weight: 800;
  }

  h3 {
    font-weight: 500;
  }

  p {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 50px;
    }
  }

  li, p {
    line-height: 1.6rem;
  }

  img {
    max-width: 180px;
    float: left;
    padding: 0 20px 10px 0;
  }

  ul {
    padding: 0 0 0 20px;
  }

  a {
    color: #E81114;
    text-decoration: none;
  }
`