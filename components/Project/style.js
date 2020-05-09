import styled from 'styled-components'

export const ProjectWrapper = styled.div`
  margin-bottom: 50px;

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 10px;

    border-bottom: 1px solid #333;

    a {
      color: #000;
      text-decoration: none;
      transition: color .2s linear;

      &:hover {
        color: #E81114;
      }
    }
  }

  h3 {
    color: #333;
  }

  p {
    margin-bottom: 20px;
    line-height: 1.4rem;

    a {
      color: #E81114;
      text-decoration: none;
    }
  }
`