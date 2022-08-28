import React, {useMemo} from "react";
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
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;

export const HomeTop = () => {
  const { data } = useQuery("quotes", () =>
    fetch("https://type.fit/api/quotes").then((res) => res.json())
  );



  return (
    <Wrapper>
      <HomeTopStyle>
        <ImagePart>
          <img src="https://picsum.photos/600/200" alt="picsum" />
          <div>{data ? data[getRandomInt(data.length)].text : null}</div>
        </ImagePart>
        <MoneyPart />
      </HomeTopStyle>
    </Wrapper>
  );
};
