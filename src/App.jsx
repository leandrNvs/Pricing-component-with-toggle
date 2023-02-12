import { useState } from "react";
import { getDescriptions, getPrice } from "./data";
import {
  CardsWrapper,
  MainTitle,
  MainWrapper,
} from "./components/styles/app.styles";
import GlobalStyle from "./components/styles/global.styles";
import Switch from "./components/Switch";
import Card from "./components/Card";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export default function App() {
  const [priceType, setPriceType] = useState("annually");
  const descriptions = getDescriptions();
  const price = getPrice(priceType);

  const changePrices = () => {
    setPriceType((prevPriceType) =>
      prevPriceType === "monthly" ? "annually" : "monthly"
    );
  };

  const el = [];

  for (let key in descriptions) {
    el.push(
      <Card
        key={key}
        title={key}
        price={price[key].price}
        storage={descriptions[key].storage}
        user={descriptions[key].users}
        sendUp={descriptions[key].sendUp}
      />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainWrapper>
        <MainTitle>Our Pricing</MainTitle>
        <Switch
          activeWhen={priceType === "monthly"}
          activated={changePrices}
          textStart="Annually"
          textEnd="Monthly"
        />
        <CardsWrapper>{el}</CardsWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
}
