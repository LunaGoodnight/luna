import React, { useMemo } from "react";
import styled from "styled-components";
import { getRandomInt } from "../utils/getRandomInt";

import { useQuery } from "react-query";
import { MoneyPart } from "./MoneyPart";

const Wrapper = styled.div`
  border-bottom: 1px solid aquamarine;
`;

const HomeTopStyle = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  gap: 2rem;
  padding: 3rem 0;
  @media only screen and (max-width: 850px) {
    width: 90%;
    flex-direction: column;
  }
`;

const ImagePart = styled.div`
  width: 60rem;
  image {
    width: 600px;
    height: 200px;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
    image {
      max-width: 100%;
      height: auto;
    }
  }
`;

const getQuote = (data) => {
  if (data) {
    return data[getRandomInt(data.length)].text;
  }
  return null;
};
export const HomeTop = () => {
  const { data } = useQuery("quotes", () =>
    fetch("https://type.fit/api/quotes").then((res) => res.json())
  );
  const cacheData = useMemo(() => getQuote(data), [data]);

  return (
    <Wrapper>
      <HomeTopStyle>
        <ImagePart>
          <img src="https://picsum.photos/600/200" alt="picsum" />
          <div>{data ? cacheData : null}</div>
        </ImagePart>
      </HomeTopStyle>
    </Wrapper>
  );
};
