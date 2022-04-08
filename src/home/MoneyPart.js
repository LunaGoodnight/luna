import React from "react";
import { BitcoinPart } from "./BitcoinPart";
import { CurrencyConverter } from "./CurrencyConverter";

export const MoneyPart = () => {
  return (
    <div>
      <BitcoinPart />
      <CurrencyConverter />
    </div>
  );
};
