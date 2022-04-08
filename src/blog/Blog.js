import React from "react";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { ContentCenterWrapper } from "../styles/appStyleConfig";
import { useQuery } from "react-query";
import { Eat } from "./Eat";
import { English } from "./English";

const TopBlock = styled.div`
  padding: 1rem 0;
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  li {
    color: dodgerblue;
  }
`;

export const Wine = () => {
  return <div>qweewer</div>;
};

const routeList = [
  { path: "eat", title: "美食", element: <Eat /> },
  { path: "wine", title: "美酒", element: <Wine /> },
  { path: "english", title: "英文", element: <English /> },
  { path: "japanese", title: "日文" },
  { path: "anime", title: "動畫" },
  { path: "mountain", title: "爬山" },
  { path: "nft", title: "NFT" },
  { path: "novel", title: "小說" },
  { path: "poem", title: "詩集" },
  { path: "game", title: "電玩" },
  { path: "boardgames", title: "桌遊" },
  { path: "trees", title: "樹木" },
  { path: "flowers", title: "花" },
  { path: "park", title: "公園" },
  { path: "radio", title: "廣播" },
  { path: "drama", title: "追劇" },
  { path: "leopardCat", title: "石虎" },
];

export const Home = () => {
  return <div>adfajdfo</div>;
};
export const Blog = () => {
  return (
    <ContentCenterWrapper>
      <TopBlock>
        <NavList>
          {routeList.map(({ path, title }) => {
            return (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </NavList>
      </TopBlock>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {routeList.map((item, ind) => {
            const { path, element } = item;
            return <Route key={ind} path={path} element={element} />;
          })}
        </Route>
      </Routes>
    </ContentCenterWrapper>
  );
};
