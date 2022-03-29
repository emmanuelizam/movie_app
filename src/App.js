import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import Movie from "./components/Movie";
import Header from "./components/Header";

//styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

const NotFound = () => {
  return <h1>Not found</h1>;
};

export default App;
