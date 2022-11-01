import React from "react";
import "../index.css";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-section">
        <h1>About Us</h1>
        <p>
          This website is an attempt to help in learning popular sorting
          algorithms by visualization
        </p>
        <p>
          Purely educational purposes only, No copyright infringement intended.
        </p>
      </div>
      <div className="hero">
        <div className="static-txt">We are</div>
        <ul className="dynamic-txts">
          <li>
            <span>Developers </span>
          </li>
          <li>
            <span>Designers </span>
          </li>
          <li>
            <span>YouTubers </span>
          </li>
          <li>
            <span>Freelancers </span>
          </li>
        </ul>
      </div>
      <div
        style={{ padding: "0 40px 40px 100px", backgroundColor: "aliceblue" }}
      >
        <div>
          <h1>Helps to</h1>
          <ul>
            <li>understand the working of sorting algorithm</li>
            <li>check total swaps required</li>
            <li>check total comparisions</li>
            <li>compare algorithms side by side</li>
            <li>
              know the time taken (time is just an approximate unit for
              comparision)
            </li>
          </ul>
        </div>
        <div>
          <h1>Features</h1>
          <ul>
            <li>Sort any given array of 3 digits positive integers</li>
            <li>Alter the speed of execution</li>
            <li>Start, pause and reset the execution</li>
            <li>Generate random array of numbers of sorting</li>
          </ul>
        </div>
        <div>
          <h1>Technologies</h1>
          <ul>
            <li>
              <a href="https://reactjs.org/" rel="nofollow" target="_blank">
                React
              </a>{" "}
              with hooks
            </li>
            <li>
              <a
                href="https://styled-components.com/"
                rel="nofollow"
                target="_blank"
              >
                Styled components
              </a>{" "}
              +{" "}
              <a href="https://material-ui.com/" rel="nofollow" target="_blank">
                React material
              </a>{" "}
              (css and component libraries)
            </li>
            <li>
              <a href="https://github.com/pmndrs/zustand" target="_blank">
                Zustand
              </a>{" "}
              (hooks based state management library)
            </li>
            <li>
              <a href="https://webpack.js.org/" rel="nofollow" target="_blank">
                Webpack
              </a>{" "}
              (Bundler)
            </li>
          </ul>
        </div>
        <div>
          <h1>Features built using</h1>
          <ul>
            <li>
              Animations are done using pure CSS and uses{" "}
              <a
                href="https://aerotwist.com/blog/flip-your-animations/"
                rel="nofollow"
                target="_blank"
              >
                FLIP principle
              </a>
            </li>
            <li>
              Flex is used for array display and manipulation of positions (flex
              order property)
            </li>
            <li>
              JavaScript async generators are used heavily for the controlled
              execution of algorithms
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
