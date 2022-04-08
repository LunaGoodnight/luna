import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  padding: 1rem;
  width: 10rem;
  border: none;
  text-align: right;
  font-size: 2rem;

  &:focus {
    outline: none;
  }
`;

const ConverterStyle = styled.div`
  h3 {
    color: #61dafb;
    padding: 1rem 0;
  }
`;

const Arrow = styled.span`
  display: block;
  padding: 0 1rem;
`;
const InputBlocks = styled.div`
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  border: 0.2rem solid #d0d0d0;
  position: relative;
  padding: 0 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const CurrencyTitleSpan = styled.span`
  color: gray;
`;

const TwdText = styled.div`
  padding: 1rem;
  width: 10rem;
  border: none;
  text-align: right;
  font-size: 2rem;
`;
export const CurrencyConverter = () => {
  const currencyData = useQuery("currency", () =>
    fetch("https://api.exchangerate.host/latest?base=USD").then((res) =>
      res.json()
    )
  );

  const [usd, setUsd] = useState(0);
  const [twd, setTwd] = useState(0);
  useEffect(() => {
    console.log({ usd });
    if (currencyData.isFetched) {
      const {
        data: {
          rates: { TWD },
        },
      } = currencyData;
      setTwd(Number(usd * TWD));
    }
  }, [usd]);

  return (
    <ConverterStyle>
      <h3>匯率換算（美元 → 台幣）去小數點惹</h3>
      <InputBlocks>
        <InputContainer>
          <InputStyle
            type="text"
            value={usd}
            onChange={(e) => setUsd(e.target.value)}
          />
          <CurrencyTitleSpan>USD</CurrencyTitleSpan>
        </InputContainer>

        <Arrow> → </Arrow>
        <InputContainer>
          <TwdText>{Math.round(twd)}</TwdText>
          <CurrencyTitleSpan>TWD</CurrencyTitleSpan>
        </InputContainer>
      </InputBlocks>
    </ConverterStyle>
  );
};
