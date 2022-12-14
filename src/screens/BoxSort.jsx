import React from "react";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Controller } from "../components/Controller";
import { AlgoDisplay } from "../components/AlgoDisplay";

const Container = styled.div`
  // margin: 0 10px;
  min-height: calc(100vh - 0px);
  position: relative;
  // margin-bottom: 50px;
  text-align: -webkit-center;
`;

export default function Boxsort() {
  return (
    <Container>
      <NavBar />
      <Controller />
      <AlgoDisplay />
      {/* <Footer /> */}
    </Container>
  );
}
