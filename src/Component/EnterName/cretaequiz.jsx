import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Entername.css'
export default function Entername(props) {
  const Navigate = useNavigate()
  const [name,setname] = useState("")
  const [title,setTitle]=useState("")
  const chanegthename = (e)=>{
    console.log(e.target.value)
    setname(e.target.value)
  }
  const changeTitle = (e)=>{
      setTitle(e.target.value)
  }
  const givename = (e)=>{
      e.preventDefault()
      props.data.name = name
      props.data.title = title
      console.log(props.data)
      Navigate('/q1')
  }
  return (
    <div className='Entername'>
        <div className="namebox">
            <h1>Enter your name and title of the quiz!</h1>
          
            <div className="form">
              <form action="" onSubmit={givename}>
                <label htmlFor="">Enter Your Name</label><br />
                <input type="text" onChange={chanegthename}/> <br />
                <label>Enter the Title of the QUiz</label> <br />
                <input type="text" onChange={changeTitle} /> <br />
              <button type="submit" className='butt' value="Submit">Submit </button>
              </form>
            </div>
        </div>
    </div>
  )
}
