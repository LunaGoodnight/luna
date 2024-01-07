import React, { useMemo } from "react";
import styled from "styled-components";
import { textLinks } from "../config/textLinks";

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
  flex-wrap: wrap;
  gap: 2rem;
  @media only screen and (max-width: 850px) {
    width: 90%;
    gap: 0;
  }
`;

const Title = styled.h3`
  color: teal;
  padding-bottom: 1rem;
`;

const List = styled.ul`
  li {
    padding-bottom: 1rem;
  }
  a {
    color: #19acef;
  }
`;

const LinkSectionBlocks = styled.div`
  width: 17rem;
  @media only screen and (max-width: 850px) {
    width: 50%;
  }
`;

export const TextLinks = () => {
  const sortedLengthList = useMemo(() => {
    const newList = textLinks.slice();

    newList.sort((a, b) => a.list.length - b.list.length);
    return newList;
  }, [textLinks]);
  return (
    <Wrapper>
      {sortedLengthList.map(({ title, list }, index) => {
        return (
          <LinkSectionBlocks key={index}>
            <Title>{title}</Title>
            <List>
              {list.map(({ name, links }) => {
                return (
                  <li key={links}>
                    <a target="_blank" href={links} rel="noreferrer">
                      {name}
                    </a>
                  </li>
                );
              })}
            </List>
          </LinkSectionBlocks>
        );
      })}
    </Wrapper>
  );
};
