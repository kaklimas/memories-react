import React, {useState} from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

const postURL = 'http://localhost:4000/app/newpost'
const getURL = 'http://localhost:4000/app/posts'

const FormDiv = styled.div`
  width: 30%;
  min-width: 400px;
  max-height: 500px;
  margin-bottom: 20px;
  height: 100%;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
`

function Form() {
    const [creator, setCreator] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [tags, setTags] = useState('')
    const [selectedFile, setSelectedFile] = useState('');


    const convertBase64 = (file) => {
        return new Promise((res, rej) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                res(fileReader.result)
            };

            fileReader.onerror = (err) => {
                rej(err);
            };
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await axios.get(getURL)
            .then(async (res) => {
                const resDataLength = res.data.length;
                let maxID = -1
                res.data.forEach(card => {
                    if (maxID < card.id) maxID = card.id
                })
                maxID++;

                const base64 = await convertBase64(selectedFile)

                const data = {
                    "id": maxID,
                    "title": title,
                    "message": message,
                    "creator": creator,
                    "tags": tags,
                    "selectedFile": 'msg'
                }
                data.id > -1 ?
                    axios.post(postURL, data)
                        .then((res) => console.log(res))
                        .catch((err) => console.log(err))
                    : console.log("data id == 0, ERR")
            })
            .catch((err) => console.log(err))
        cleanUpInputs()
    }
    const cleanUpInputs = () => {
        setSelectedFile('');
        setTags('');
        setCreator('');
        setMessage('');
        setTitle('');
        setSelectedFile('');
        console.log(document.getElementById('file').attributes.value)
    }


    return (
        <FormDiv>
            <div className='section-title' style={{textAlign: 'center', marginBottom: 20}}><h3>Creating memory</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <input required value={creator} type="text" className="form-control" id="creatorName"
                           placeholder='Creator' onChange={(event) => setCreator(event.target.value)}></input>
                </div>
                <div className='mb-3'>
                    <input required value={title} type="text" className="form-control" id="title" placeholder='Title'
                           onChange={(event) => setTitle(event.target.value)}></input>
                </div>
                <div className="mb-3">
                    <textarea required value={message} className="form-control" id="message" rows="3"
                              placeholder='Message' onChange={(event) => setMessage(event.target.value)}
                              style={{resize: 'none'}}></textarea>
                </div>
                <div className='mb-3'>
                    <input required type="text" value={tags} className="form-control" id="tags"
                           onChange={(event) => setTags(event.target.value)}
                           placeholder='Tags (separated by commas)'></input>
                </div>
                <div className='mb-3'>
                    <input required type="file" name="file" id='file'
                           onChange={(event) => setSelectedFile(event.target.files[0])}/>
                </div>


                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Submit</button>
                <button className="btn btn-danger" style={{width: '100%', marginTop: 10}}
                        onClick={cleanUpInputs}>Clear
                </button>

            </form>
        </FormDiv>
    )
}

export default Form