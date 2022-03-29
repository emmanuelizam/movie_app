import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  padding: 0 20px;
  margin: 0 auto;
  max-width: var(--maxWidth);

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding: 0px;
`;
export const Cell = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 720px;
  border-radius: 20px;
  transition: all 5s;
`;
