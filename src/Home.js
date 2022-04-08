import styled from "styled-components";
import React from "react";
import { HomeTop } from "./home/HomeTop";
import { HomeCenter } from "./home/HomeCenter";

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
    </HomeStyle>
  );
};

export default {};
