import React, { useState, useEffect } from 'react'
import axios from "axios";
import styled from "styled-components";
import NoCards from './NoCards';
import Card from './Card'

import beachImg from '../img/beach.png'
import dadsImg from '../img/father.png'
import christmasImg from '../img/christmas.png'

const beachCard = {
    title: "Holidays together",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    creator: "Maria Adam",
    tags: ["holidays", "summer", "vacation"],
    src: beachImg,
    date: new Date()
  }
const dadsCard = {
    title: "Summer with my kiddo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    creator: "Aston Martin",
    tags: ["holidays", "summer", "vacation"],
    src:dadsImg,
    date: new Date()
}
const christmasCard = {
    title: "Ugly winter",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    creator: "Jhon Doe",
    tags: ["disaster", "winter", "ugly"],
    src: christmasImg,
    date: new Date()
}

const sampleCards = [beachCard, dadsCard, christmasCard, beachCard, dadsCard, christmasCard,
            beachCard, dadsCard, christmasCard, beachCard, dadsCard, christmasCard]


const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

function CardBox() {
    const [usersCards, setUsersCards] = useState([]);
    const serverPostsUrl = 'http://localhost:4000/app/posts'


    const fetchData = async () => {
        await axios.get(serverPostsUrl)
            .then((res) => {
                const data = res.data
                setUsersCards(data)
            })
            .catch((err) => console.log(err))

    }
    useEffect(() => {
        fetchData()
            .then()
            .catch((err) => console.log(err))
    })
    return (
        <CardDiv>
            {usersCards.length > 0 ? usersCards.map(card => <Card key={card.id} card={card}/>) : <NoCards />}
        </CardDiv>
  )
}

export default CardBox