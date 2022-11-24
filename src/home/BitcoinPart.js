import React from "react";
import styled from "styled-components";
import { numberSeparator } from "../utils/numberSeparator";
import { ReactComponent as BitcoinSvg } from "../styles/images/bitcoin.svg";
import { useQuery } from "react-query";

const CurrencySpan = styled.span`
  font-size: 1.6rem;
  color: gray;
`;

const BitcoinMoney = styled.span`
  font-size: 2.6rem;
  font-weight: bold;
  padding-right: 0.5rem;
  font-family: monospace;
  color: orange;
`;
const BitcoinSection = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  gap: 1rem;
`;

const NumberPart = styled.div`
  align-items: baseline;
  display: flex;
  gap: 0.5rem;
`;

export const BitcoinPart = () => {
  const { data: bitcoinData } = useQuery("bitcoin", () =>
    fetch(
      "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,TWD"
    ).then((res) => res.json())
  );
  // const data = useQuery("weather", () =>
  //   fetch("https://catsheue-001-site2.itempurl.com/weatherforecast").then(
  //     (res) => res.json()
  //   )
  // );
  return (
    <BitcoinSection>
      <BitcoinSvg />
      <NumberPart>
        <BitcoinMoney>{numberSeparator(bitcoinData?.TWD)}</BitcoinMoney>
        <CurrencySpan>TWD</CurrencySpan>
      </NumberPart>
    </BitcoinSection>
  );
};
