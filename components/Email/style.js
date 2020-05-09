import styled from 'styled-components'

export const TriangleCSS = styled.div`
  width: 0px;
  height: 0px;
  border-style: inset;
  border-width: 0 100px 173.2px 100px;
  border-color: transparent transparent #E81114 transparent;
  float: left;
  transform: rotate(135deg);
  position: fixed;
  bottom: -120px;
  right: -120px;
`

export const EmailLink = styled.a`
  &:hover {
    > img {
      transform: rotate(360deg);
    }
  }
`