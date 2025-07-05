import React, { useMemo } from "react";
import styled from "styled-components";
import { getRandomInt } from "../utils/getRandomInt";
import { useQuery } from "react-query";

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
const QuoteText = styled.div`
  height: 20px;

  @media only screen and (max-width: 850px) {
    height: auto;
  }
`;
const WrapImage = styled.div`
  width: 600px;
  height: 200px;

  @media only screen and (max-width: 850px) {
    width: 100%;
    height: auto;
  }
`;
const ImagePart = styled.div``;

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
          <WrapImage>
            <img src="https://picsum.photos/600/200" alt="picsum" />
          </WrapImage>
          <QuoteText>{data ? cacheData : null}</QuoteText>
        </ImagePart>
      </HomeTopStyle>
    </Wrapper>
  );
};
