import React from "react";

import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ movie }) => {
  return (
    <Wrapper>
      <Content>
        <a href="/"><h1>Home</h1></a><h3>{movie}</h3>
      </Content>
    </Wrapper>
  );
};

export default BreadCrumb;
