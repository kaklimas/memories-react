import React, {useState, useEffect} from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import emptyHeart from '../img/emptyHeart.png'
import fullHeart from '../img/fullHeart.png'
import trashSrc from '../img/trash.png'
import beachImg from '../img/beach.png'
import {get} from "react-hook-form";

const getPostURL = 'http://localhost:4000/app/post'
const baseURL = 'http://localhost:4000/app/posts'
const postLike = 'http://localhost:4000/app/postlike'
const postDislike = 'http://localhost:4000/app/postdislike'

function Card({card}) {

    const [title, creator, date, tags, base64, content, id, likeCount] = [card.title, card.creator, new Date(card.createdAt), card.tags, card.selectedFile, card.message, card.id, card.likeCount];
    const [likes, setLikes] = useState(likeCount)
    const [imgSrc, setImgSrc] = useState(emptyHeart)




    const handleHeartClick = async (event) => {
        event.preventDefault();
        if (imgSrc === emptyHeart) {
            await axios.post(postLike + id)
                .then()
                .catch((err) => console.log(err))
            setImgSrc(fullHeart)
        } else {
            await axios.post(postDislike + id)
                .then()
                .catch((err) => console.log(err))
            setImgSrc(emptyHeart)
        }
        await getLikes()
    }
    const handleDeleteClick = async () => {
        const deleteURL = baseURL + `${id}`
        await axios.delete(deleteURL)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    const getLikes = async () => {
        await axios.get(getPostURL + id)
            .then((res) => {
                setLikes(res.data.likeCount)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        const getLikes = async () => {
            await axios.get(getPostURL + id)
                .then((res) => {
                    setLikes(res.data.likeCount)
                })
                .catch((err) => console.log(err))
        }
        getLikes()
            .catch((err) => console.log(err))
    }, [])

    const calculateTime = () => {
        const now = new Date()
        const yearDiff = now.getFullYear() - date.getFullYear()
        const monthDiff = now.getMonth() - date.getMonth()
        const daysDiff = now.getDate() - date.getDate()
        const hoursDiff = now.getHours() - date.getHours()
        const minutesDiff = now.getMinutes() - date.getMinutes()

        if (yearDiff > 0) {
            return `Posted ${yearDiff} years ago`
        }
        if (monthDiff > 0) {
            return `Posted ${monthDiff} months ago`
        }
        if (daysDiff > 0) {
            return `Posted ${daysDiff} days ago`
        }
        if (hoursDiff > 0) {
            return `Posted ${hoursDiff} hours ago`
        }
        if (minutesDiff > 0) {
            return `Posted ${minutesDiff} minutes ago`
        }
        return `Posted ${now.getSeconds() - date.getSeconds()} seconds ago`
    }
    const getTags = () => {
        return (tags.split(', ').map(tag => <p key={tag}>{`#${tag}`}</p>))
    }

    return (
        <div>
            <div className="card" style={{
                width: 350,
                marginLeft:50,
                marginBottom: 50,
                minHeight: 400,
                border: 'none',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5
            }}>
                <div style={{backgroundColor: 'black', borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                    <img src={beachImg} className="card-img-top" alt="/"
                         style={{height: 250, opacity: 0.5, borderTopLeftRadius: 5, borderTopRightRadius: 5}}></img>
                </div>
                <div className='card-description'
                     style={{width: '90%', position: 'absolute', color: 'white', margin: 17}}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <p className="card-title" style={{marginBottom: 0, fontSize: 15}}>{creator}</p>
                        <button style={{border: 'none', background: 'inherit', color: 'white', fontWeight: 700}}>...
                        </button>
                    </div>
                    <p className="card-text" style={{fontSize: 12}}>{calculateTime()}</p>

                </div>
                <div className="card-body">
                    <div style={{
                        fontSize: 13,
                        color: 'gray',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 7
                    }}>{getTags()}</div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" style={{fontSize: 14, marginTop: 15}}>{content}</p>
                    <div className='card-reactions' style={{display: 'flex', justifyContent: 'space-between'}}>
                        <button style={{border: 'none', background: 'white', display: 'flex'}}
                                onClick={handleHeartClick}>
                            <img src={imgSrc} alt='' style={{width: 25}}/>
                            <p style={{marginLeft: 10}}>Like {likes}</p>
                        </button>
                        <button style={{border: 'none', background: 'white', display: 'flex'}}
                                onClick={handleDeleteClick}>
                            <img src={trashSrc} alt='' style={{width: 25}}/>
                            <p style={{marginLeft: 10}}>Delete</p>
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card