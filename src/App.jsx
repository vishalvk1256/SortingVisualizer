import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Controller } from "./components/Controller";
import { AlgoDisplay } from "./components/AlgoDisplay";

import Home from "./screens/Home";
import About from "./screens/About";
import Algorithms from "./screens/Algorithms";
import Boxsort from "./screens/BoxSort";
import BarGraphSort from "./screens/BarGraphSort";

// const Container = styled.div`
//   margin: 0 10px;
//   min-height: calc(100vh - 50px);
//   position: relative;
//   margin-bottom: 50px;
// `;

const Container = styled.div`
  // margin: 0 10px;
  min-height: calc(100vh - 0px);
  position: relative;
  // margin-bottom: 50px;
`;

export const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <CssBaseline />
        <Container>
          <Header />
          <Routes>
            <Route path="/SortingVisualizer" element={<Home />} />
            <Route path="/SortingVisualizer/home" element={<Home />} />
            <Route path="/SortingVisualizer/boxsort" element={<Boxsort />} />
            <Route
              path="/SortingVisualizer/barsort"
              element={<BarGraphSort />}
            />
            <Route
              path="/SortingVisualizer/algorithms"
              element={<Algorithms />}
            />
            <Route path="/SortingVisualizer/about" element={<About />} />
          </Routes>
        </Container>
      </Router>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

export default App;
