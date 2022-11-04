import React from "react";
import ActionAreaCard from "../components/ActionAreaCard";
import "../index.css";

import sorting from "../images/sorting.png";
import boxsort from "../images/boxsort.png";

function Home() {
  return (
    <div
      style={{
        // height: "100%",
        // width: "100vw"
        backgroundColor: "aliceblue",
      }}
    >
      <div className="hero">
        <div className="static-txt">Select</div>
        <ul className="dynamic-txts">
          <li>
            <span>BarGraph Sort</span>
          </li>
          <li>
            <span>Box Sort</span>
          </li>
          <li>
            <span>BarGraph Sort</span>
          </li>
          <li>
            <span>Box Sort</span>
          </li>
        </ul>
      </div>
      <div
        style={{
          // height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "aliceblue",
          alignContent: "flex-start",
        }}
      >
        <ActionAreaCard
          // image="./sorting.png"
          // dummy="SortingVisualizer/boxsort.png"
          image={sorting}
          alt="BarGraphSort"
          title="BarGraph Sort"
          description={
            // "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            "BarGraph Sort is a Visualization technique where the sorting is done with Step-by-Step explanation & visualized using bargraphs"
          }
        />
        <ActionAreaCard
          // image="./boxsort.png"
          // dummy="SortingVisualizer/boxsort.png"
          image={boxsort}
          alt="BoxSort"
          title="Box Sort"
          description={
            // "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            "Box Sort is a Visualization technique, visualization is done using box animations & comaparisions can be done btw algorithms"
          }
        />
      </div>
    </div>
  );
}

export default Home;
