import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Card({card}) {
  
  const calculateTime = () => {
    const now = new Date()
    const yearDiff = now.getFullYear - card.date.getFullYear
    const monthDiff = now.getMonth = card.date.getMonth
    const hoursDiff = now.getHours - card.date.getHours
    const minutesDiff = now.getMinutes - card.date.getMinutes

    if (yearDiff > 0){
      return `Posted ${yearDiff} years ago`
    }
    if (monthDiff > 0){
      return `Posted ${monthDiff} months ago`
    }
    if (hoursDiff > 0){
      return `Posted ${hoursDiff} hours ago`
    }
    if (minutesDiff > 0){
      return `Posted ${minutesDiff} minutes ago`
    }
    return `Posted ${now.getSeconds - card.date.getSeconds} seconds ago`
  }

  return (
    <div>
        <div className="card" style={{width: 300, marginBottom: 50, minHeight: 400, border:'none', borderTopLeftRadius:5, borderTopRightRadius:5}}>
            <div style={{backgroundColor:'black', borderTopLeftRadius:5, borderTopRightRadius:5}}>
            <img src={card.src} class="card-img-top" alt={card.src} style={{height:200, opacity:0.5, borderTopLeftRadius:5, borderTopRightRadius:5}}></img>
            </div>
            <div className="card-body">
                <h6 className="card-title">{card.title}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{card.creator}</h6>
                <p className="card-text" style={{fontSize: 13}}>{card.content}</p>
                {/* <p>{calculateTime()}</p> */}
            </div>
        </div>
    </div>
  )
}

export default Card