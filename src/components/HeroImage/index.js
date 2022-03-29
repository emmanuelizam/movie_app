import { React, useState, useEffect, useCallback } from "react";
import { Content, Wrapper, Arrow, Text } from "./HeroImage.styles";
import arrow from "../../images/arrow4.png";

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";

const HeroImage = ({ data }) => {
  const [index, setindex] = useState(0);

  return data.results[index] ? (
    <Wrapper
      image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.results[index].backdrop_path}`}
    >
      <Arrow
        arrow={arrow}
        onClick={() => {
          if (index < data.results.length - 1) {
            setindex((prev) => (prev += 1));
          }
        }}
      ></Arrow>
      <Content>
        <Text>
          <h1>{data.results[index].original_title}</h1>
          <p>{data.results[index].overview}</p>
        </Text>
      </Content>
    </Wrapper>
  ) : null;
};

export default HeroImage;
