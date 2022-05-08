import React from "react";
import Card from "./components/Card";
import styled from "styled-components";
import Form from "./components/Form";
// sample imgs
import beachImg from './img/beach.png'
import dadsImg from './img/father.png'
import christmasImg from './img/christmas.png'

const MergedDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`
const CardsDiv = styled.div`
`

const beachCard = {
  title: "Holidays together",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum. Sed tempus urna et pharetra pharetra massa. Morbi non arcu risus quis varius quam quisque. Blandit turpis cursus in hac habitasse platea.",
  creator: "Maria Adam",
  src: beachImg
}
const dadsCard = {
  title: "Summer with my kiddo",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum. Sed tempus urna et pharetra pharetra massa. Morbi non arcu risus quis varius quam quisque. Blandit turpis cursus in hac habitasse platea.",
  creator: "Aston Martin",
  src:dadsImg
}
const christmasCard = {
  title: "Ugly winter",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum. Sed tempus urna et pharetra pharetra massa. Morbi non arcu risus quis varius quam quisque. Blandit turpis cursus in hac habitasse platea.",
  creator: "Jhon Doe",
  src: christmasImg
}

const sampleCards = [beachCard, dadsCard, christmasCard, beachCard, dadsCard, christmasCard,
  beachCard, dadsCard, christmasCard, beachCard, dadsCard, christmasCard]

function App() {
  return (
    <div>
      <MergedDiv>
        <Form />
        {sampleCards.map(singleCard => <Card card={singleCard} />)}
      </MergedDiv>
      
      <CardsDiv>

      </CardsDiv>
      
    </div>
  );
}

export default App;
