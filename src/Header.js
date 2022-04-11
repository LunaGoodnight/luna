import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Hamburger } from "./Hamburger";
import { routeList } from "./config/routeList";


const HeaderStyle = styled.div`
  //background: #282c34;
  background: #61dafb;
  width: 100%;

  font-size: 2rem;
  padding: 1.6rem 0;
`;

export const CenterStyle = styled.div`
  width: 80%;
  @media only screen and (max-width: 850px) {
    width: 90%;
  }
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  background: linear-gradient(
    to right,
    #dffd90 0%,
    #ebfffc 20%,
    #bcfff3 50%,
    #fbfffb 60%,
    #d3e918 80%,
    #fff 81%,
    #ffcb37 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 4rem;
  letter-spacing: 0.2rem;
  font-family: "Pacifico", cursive;
`;

const NavStyle = styled.ul`
  display: flex;
  color: #fff;
  li {
    margin-right: 2rem;
    &:last-child {
      margin: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <CenterStyle>
        <Link to="/">
          <Logo>Luna</Logo>
        </Link>
        <NavStyle>
          {routeList.map(({ to, title }, index) => {
            return (
              <li key={index}>
                <Link to={to}>{title}</Link>
              </li>
            );
          })}
        </NavStyle>
        <Hamburger />
      </CenterStyle>
    </HeaderStyle>
  );
};

export default {};
