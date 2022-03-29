import { React, useCallback, useState, useEffect } from "react";

//API
import API from "../API";
import { useHomeFetch } from "../hooks/useHomeFetch";

//components
import HeroImage from "./HeroImage";
import Search from "./Search";
import Grid from "./Grid";

const Home = () => {
  const { data, loading, error } = useHomeFetch();

  return (
    <>
      {data.results[0] ? <HeroImage data={data}></HeroImage> : null}
      <Search></Search>
      <Grid data={data}></Grid>
    </>
  );
};

export default Home;
