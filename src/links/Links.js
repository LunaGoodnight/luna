import React from "react";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { animeList } from "../config/linkData";
import { Home } from "./Home";
import { WebsiteShower } from "./WebsiteShower";

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
  //background: pink;
  width: 90%;
  height: 87vh;
  overflow-y: scroll;
`;

const totalLinks = [{ title: "Anime", list: animeList, path: "anime" }];

export const Links = () => {
  return (
    <LinksWrapper>
      <NavBar>
        {totalLinks.map((it, index) => {
          const { title, path } = it;
          return (
            <li key={index}>
              <Link to={path}>{title}</Link>
            </li>
          );
        })}
      </NavBar>
      <LeftPart>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {totalLinks.map((item, ind) => {
              const { path, list } = item;
              return (
                <Route
                  key={ind}
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
