import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: var(--darkGrey);
  align-items: center;
  height: 100px;
  padding: 0 20px;
`;

export const Container = styled.div`
  position: relative;
  background-color: red;
  height: 55px;
  width: 100%;
  border-radius: 40px;
  background: var(--medGrey);
  color: (--white);
  justify-content: center;
  img {
    position: absolute;
    width: 40px;
    left: 10px;
    top: 10px;
  }
  input {
    position: absolute;
    width: 95%;
    height: 40px;
    font-family: sans-serif;
    font-size: var(--fontBig);
    color: var(--white);
    left: 0;
    background-color: transparent;
    padding: 0 0 0 60px;
    margin: 8px 0px 0px 0px;
    border: 0;

    :focus {
      outline: none;
    }
  }
`;
