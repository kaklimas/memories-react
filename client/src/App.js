import React from "react";
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";
import Form from "./components/Form";

import memoriesImg from './img/memories.png'
import CardBox from "./components/CardBox";
import './App.css'

// TODO likes should work and correct time

const MergedDiv = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right:auto;
  display: flex;

  padding-top: 20px;

  
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
  min-height: 800px;
`


function App() {
  return (
    <ContainerDiv>
      <TitleDiv>
      <h2>Memories  <img src={memoriesImg} style={{height:40}} alt=''></img></h2>
      </TitleDiv>
      <MergedDiv className='merged_div'>
          <Form />
          <CardBox />
      </MergedDiv> 
    </ContainerDiv>
  );
}

export default App;
