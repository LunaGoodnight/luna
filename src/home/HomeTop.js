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

const quoteList = [
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It's not whether you get knocked down, it's whether you get up.",
  "The best way to predict the future is to create it.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Your time is limited, don't waste it living someone else's life.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Do not wait for a leader; do it alone, person to person.",
  "The mind is everything. What you think you become."
]

const getQuote = (data) => {
  if (data) {
    return data[getRandomInt(data.length)].text;
  }
  return null;
};
export const HomeTop = () => {


  return (
    <Wrapper>
      <HomeTopStyle>
        <ImagePart>
          <WrapImage>
            <img src="https://picsum.photos/600/200" alt="picsum" />
          </WrapImage>
          <QuoteText>{getQuote(quoteList)}</QuoteText>
        </ImagePart>
      </HomeTopStyle>
    </Wrapper>
  );
};
