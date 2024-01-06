import React from "react";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { WebsiteShower } from "./WebsiteShower";
import { animeList } from "../config/linkData";

import ForestPass from "../styles/images/website/forestpass.webp";

const NavBar = styled.ul`
  width: 10%;
  padding-right: 2rem;
  li {
    padding: 1rem 0;
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;

const LeftPart = styled.div`
  width: 90%;
  height: 87vh;
  overflow-y: scroll;
`;

const indexList = [
  {
    title: "森林好好玩",
    link: "https://forestpass.welcometw.com/",
    image: ForestPass,
    description: "森林好好玩官方網站-國家森林遊樂區門票",
  },
];

const totalLinks = [
  { title: "Index", list: indexList, path: "" },
  { title: "Anime", list: animeList, path: "anime" },
];

export const Links = () => {
  return (
    <LinksWrapper>
      <NavBar>
        {totalLinks.map((it, index) => {
          const { title, path } = it;
          return (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          );
        })}
      </NavBar>
      <LeftPart>
        <Routes>
          <Route path="/">
            {totalLinks.map((item, ind) => {
              const { path, list } = item;
              return (
                <Route
                  key={path}
                  path={path}
                  element={<WebsiteShower list={list} />}
                />
              );
            })}
          </Route>
        </Routes>
      </LeftPart>
    </LinksWrapper>
  );
};
