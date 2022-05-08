import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

const CardDiv = styled.div`
  width: 18rem;
`

function Card({card}) {
  return (
    <div>
        <div className="card" style={{width: 400}}>
            <img src={card.src} class="card-img-top" alt={card.src}></img>
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{card.creator}</h6>
                <p className="card-text">{card.content}</p>
            </div>
        </div>
    </div>
  )
}

export default Card