import React from "react";
import { Wrapper, Content, Cell } from "./Grid.styles";

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";
import NoImage from "../../images/no_image.jpg";

const Grid = ({ data }) => {
  return (
    <Wrapper>
        <div>
            <h1>
                Popular Movies
            </h1>
        </div>
      <Content>
        {data.results[0]
          ? data.results.map((V) => (
              <Cell
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${V.poster_path}`}
                alt={NoImage}
              ></Cell>
            ))
          : NoImage}
      </Content>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", margin: "30px 0"}}>
          <button style={{borderRadius: "30px"}}>
              <h1>Load more</h1>
          </button>
      </div>
    </Wrapper>
  );
};

export default Grid;
