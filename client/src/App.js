import React from "react";
import Card from "./components/Card";
import styled from "styled-components";
import Form from "./components/Form";
// sample imgs
import beachImg from './img/beach.png'
import dadsImg from './img/father.png'
import christmasImg from './img/christmas.png'
import memoriesImg from './img/memories.png'


const MergedDiv = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right:auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-around;
  
`
const TitleDiv = styled.div`
  margin-left:auto;
  margin-right:auto;
  background-color:white;
  padding:4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  color: rgb(18, 175, 247);
  width: 85%;
`
const ContainerDiv = styled.div`
  background-image: linear-gradient(to bottom right, rgb(18, 175, 247), lightblue);
  padding-top:20px;
`

const beachCard = {
  title: "Holidays together",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  creator: "Maria Adam",
  src: beachImg,
  date: new Date()
}
const dadsCard = {
  title: "Summer with my kiddo",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  creator: "Aston Martin",
  src:dadsImg,
  date: new Date()
}
const christmasCard = {
  title: "Ugly winter",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  creator: "Jhon Doe",
  src: christmasImg,
  date: new Date()
}

const sampleCards = [beachCard, dadsCard, christmasCard, beachCard, dadsCard, christmasCard,
  beachCard, dadsCard, christmasCard, beachCard, dadsCard, christmasCard]

function App() {
  return (
    <ContainerDiv>
      <TitleDiv>
      <h2>Memories <img src={memoriesImg} style={{height:40}}></img></h2>
      
      </TitleDiv>
      <MergedDiv>
        <Form />
        {sampleCards.map(singleCard => <Card key={singleCard.creator} card={singleCard} />)}
      </MergedDiv> 
    </ContainerDiv>
  );
}

export default App;
