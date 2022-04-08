import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Links } from "./links/Links";
import { Home } from "./Home";
import styled from "styled-components";
import { DiaryContainer } from "./diary/DiaryContainer";
import { TextLinks } from "./textlinks/TextLinks";
import { Blog } from "./blog/Blog";
import { MobileMenu } from "./MobileMenu";
import React from "react";

const AppStyle = styled.div`
  background: #fff;
`;

function App() {
  return (
    <AppStyle>
      <MobileMenu />
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/links/*" element={<Links />} />
          <Route path="/diary/*" element={<DiaryContainer />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/textLinks/*" element={<TextLinks />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </AppStyle>
  );
}

export default App;
