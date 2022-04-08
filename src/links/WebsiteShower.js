import React from "react";
import styled from "styled-components";

const SiteItem = styled.ul`
  display: flex;
  justify-content: flex-start;
  li {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 1.3rem;
  }
`;

const ImageBlock = styled.a`
  width: 15rem;
  img {
    max-width: 100%;
  }
`;
export const WebsiteShower = ({ list }) => {
  return (
    <SiteItem>
      {list.map((x, index) => {
        const { title, link, image } = x;
        return (
          <li key={index}>
            <ImageBlock href={link} target="_blank">
              <img src={image} alt={title} />
            </ImageBlock>
            <p> {title}</p>
          </li>
        );
      })}
    </SiteItem>
  );
};
