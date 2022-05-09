import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import emptyHeart from '../img/emptyHeart.png'
import fullHeart from '../img/fullHeart.png'
import trashSrc from '../img/trash.png'


function Card({card}) {
  
  const [imgSrc, setImgSrc] = useState(emptyHeart)

  const handleHeartClick = (event) => {
    event.preventDefault();
    if (imgSrc === emptyHeart){
      setImgSrc(fullHeart)
    } else setImgSrc(emptyHeart)
  }

  const getLikes = () => {
    return 1
  }

  const calculateTime = () => {
    const now = new Date()
    const yearDiff = now.getFullYear() - card.date.getFullYear()
    const monthDiff = now.getMonth() - card.date.getMonth()
    const hoursDiff = now.getHours() - card.date.getHours()
    const minutesDiff = now.getMinutes() - card.date.getMinutes()

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
    return `Posted ${now.getSeconds() - card.date.getSeconds()} seconds ago`
  }
  const getTags = () => {
    return (card.tags.map(tag => <p>{`#${tag}`}</p>))
  }
  return (
    <div>
        <div className="card" style={{width: 400, marginBottom: 50,  minHeight: 400, border:'none', borderTopLeftRadius:5, borderTopRightRadius:5}}>
            <div style={{backgroundColor:'black', borderTopLeftRadius:5, borderTopRightRadius:5}}>
            <img src={card.src} class="card-img-top" alt={card.src} style={{height:300, opacity:0.5, borderTopLeftRadius:5, borderTopRightRadius:5}}></img>
            </div>
            <div className='card-description' style={{position: 'absolute', color:'white', margin:17}} >
              <p className="card-title" style={{marginBottom:0, fontSize:15}}>{card.creator}</p>
              <p className="card-text" style={{fontSize: 12}}>{calculateTime()}</p>
            </div>
            <div className="card-body">
                <div style={{fontSize: 13, color:'gray', display:'flex', flexDirection:'row', gap:7}}>{getTags()}</div>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text" style={{fontSize: 14, marginTop:15}}>{card.content}</p>
                <div className='card-reactions' style={{display:'flex', justifyContent: 'space-between'}}>
                  <button style={{border:'none', background:'white', display:'flex'}} onClick={handleHeartClick}>
                    <img src={imgSrc} style={{width:25}}/>
                    <p style={{marginLeft: 10}}>Like {getLikes()}</p>
                  </button>
                  <button style={{border:'none', background:'white', display:'flex'}} onClick={handleHeartClick}>
                    <img src={trashSrc} style={{width:25}}/>
                    <p style={{marginLeft: 10}}>Delete</p>
                  </button>
                                
                </div>  
            </div>
            
        </div>
    </div>
  )
}

export default Card