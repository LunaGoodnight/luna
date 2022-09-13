import styled from "styled-components";
import React from "react";
import { HomeTop } from "./home/HomeTop";
import { HomeCenter } from "./home/HomeCenter";
import { HomeFooter } from "./home/HomeFooter";

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Home = () => {
  return (
    <HomeStyle>
      <HomeTop />
      <HomeCenter />
      <HomeFooter />
    </HomeStyle>
  );
};

export default {};
