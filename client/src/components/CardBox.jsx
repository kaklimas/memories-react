import React from 'react'
import axios from "axios";
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



function CardBox() {
    const serverPostsUrl = 'http://localhost:4000/app/posts'
  
    return (
    <div>
        {sampleCards.length > 0 ? sampleCards.map(card => <Card key={card.creator} card={card}/>) : <NoCards />}
    </div>
  )
}

export default CardBox