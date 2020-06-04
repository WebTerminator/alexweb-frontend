import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }
`;

export const ProfileImg = styled.div`
  max-width: 15rem;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;
