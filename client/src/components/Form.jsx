import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'


const FormDiv = styled.div`
    width: 30%;
    min-width: 400px;
    margin-bottom:20px;
    height: 100%;
    padding: 20px;
    border: 1px solid black;
    background-color:white;
`
function Form() {
  return (
    <FormDiv>
        <form>
            <div className='mb-3'>
                <input type="text" className="form-control" id="creatorName" placeholder='Creator'></input>
            </div>
            <div className='mb-3'>
                <input type="text" className="form-control" id="title" placeholder='Title'></input>
            </div>
            <div className="mb-3">
                <textarea className="form-control" id="message" rows="3" placeholder='Message' style={{resize: 'none'}}></textarea>
            </div>
            <div className='mb-3'>
                <input type="text" className="form-control" id="tags" placeholder='Tags (separated by commas)'></input>
            </div>
            <div className='mb-3'>
                <input type="file" name="file" />
            </div>
            

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </FormDiv>
  )
}

export default Form