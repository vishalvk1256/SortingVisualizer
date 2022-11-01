import React from "react";
import ActionAreaCard from "../components/ActionAreaCard";
import "../index.css";

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
          image="./sorting.png"
          dummy="SortingVisualizer/boxsort.png"
          alt="BarGraphSort"
          title="BarGraph Sort"
          description={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
        />
        <ActionAreaCard
          image="./boxsort.png"
          dummy="SortingVisualizer/boxsort.png"
          alt="BoxSort"
          title="Box Sort"
          description={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
        />
      </div>
    </div>
  );
}

export default Home;
