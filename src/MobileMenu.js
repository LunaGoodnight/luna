import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { routeList } from "./config/routeList";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setShowMobileMenu } from "./app/features/menuSlice";

const Wrapper = styled.div`
  position: fixed;
  background: black;
  opacity: 0.8;
  width: 80%;
  right: 0;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 1;
  transition: box-shadow 200ms ease-in-out 0s, opacity 200ms ease-in-out 0s,
    transform 200ms ease-in-out 0s;
  transform: ${({ show }) => (show ? "translateX(0%)" : "translateX(100%)")};

  ul {
    li {
      font-size: 1.7rem;
      width: 100%;
      padding: 1.2rem 2rem;
      color: #fff;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = () => {
  const showMobileMenu = useSelector((state) => state.menu.showMobileMenu);
  const dispatch = useDispatch();

  return (
    <Wrapper show={showMobileMenu}>
      <ul>
        {routeList.map((item, index) => {
          const { title, to } = item;
          return (
            <li
              key={index}
              onClick={() => dispatch(setShowMobileMenu(showMobileMenu))}
            >
              <Link to={to}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
