import React from "react";
import AdSense from "react-adsense";
import styled from "styled-components";
import { homeLinkData } from "../config/homeLinkData";

const CenterStyle = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media only screen and (max-width: 850px) {
    width: 90%;
  }
`;

const LinksSection = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 850px) {
    gap: 0;
  }
  h3 {
    padding-bottom: 1rem;
    color: teal;
  }
`;

const LinkList = styled.ul`
  li {
    padding-bottom: 1rem;
    a {
      color: dodgerblue;
    }
  }
`;

const LinksBlock = styled.div`
  width: 15rem;
  @media only screen and (max-width: 850px) {
    width: 50%;
  }
`;

export const HomeCenter = () => {
  return (
    <CenterStyle>
      <LinksSection>
        {homeLinkData.map((x, index) => {
          const { title, sites } = x;
          return (
            <LinksBlock key={index}>
              <h3>{title}</h3>
              <LinkList>
                {sites.map((item, ind) => {
                  const { name, url } = item;
                  return (
                    <li key={ind}>
                      <a href={url} target="_blank">
                        {name}
                      </a>
                    </li>
                  );
                })}
              </LinkList>
            </LinksBlock>
          );
        })}
      </LinksSection>
    </CenterStyle>
  );
};
