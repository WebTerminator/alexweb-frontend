import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 50px;

  a {
    color: #E81114;
    text-decoration: none;
  }

  h2 {
    margin-bottom: 10px;
    border-bottom: 1px solid #000;

    a {
      color: #000;
      transition: color .3s ease-in;
      text-decoration: none;

      &: hover {
        color: #E81114;
      }
    }
  }

  p {
    margin-bottom: 20px;
  }
`