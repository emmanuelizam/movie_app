import React from "react";
import { Wrapper, Container } from "./Search.styles";
import searchIcon from "../../images/search-icon.svg";

const Search = () => {
  return (
    <Wrapper>
      <Container>
        <img src={searchIcon} alt="search-icon"></img>
        <input type="text" placeholder="search movie"></input>
      </Container>
    </Wrapper>
  );
};

export default Search;
