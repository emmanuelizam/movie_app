import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image});
  background-color: var(--darkGrey);
  background-size: 100, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: hero 2s cubic-bezier(0, 0, 1, 1);
  @keyframes hero {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export const Arrow = styled.div`
  height: 100px;
  width: 100px;
  left: 90%;
  top: 50%;
  opacity: 0;
  position: absolute;
  background-image: url(${({ arrow }) => arrow});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  :hover {
      opacity: 1;
  }
  transition: opacity 500ms cubic-bezier(0.23, 1, 0.320, 1);
`;
export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var (--fontSuperBig);

    @media screen and (max-width: 720px) {
      font-size: var (--fontBig);
    }
  }

  p {
    font-size: var (--fontMed);
    @media screen and (max-width: 720px) {
      font-size: var (--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
