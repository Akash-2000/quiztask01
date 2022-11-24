import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './TakeQuiz.css'
export default function TakeQuiz(props) {
     const [userList, setusers] = useState(null);
     const getto = useRef()
     let Navigate = useNavigate()
    useEffect(()=>{
        getuesers();
    },[])
    const setclicks = (e)=>{
           console.log(e.target.className)
           const titles = e.target.className
           props.title1.title=e.target.className
           localStorage.setItem("title",titles)
           Navigate("/actual")
           
    }
    const getuesers = () => {
     axios.get('https://taskquiz.herokuapp.com/')
      .then(
        (result) => {
          console.log(result.data);
          setusers(result.data);
        },
        (error) => {
          console.log(error);
          setusers(null);
        }
      );
  };
    if (!userList) return <><div>No Record Found</div></>;
    return(
      <div className='MainPage'>
        <div className='namebox1'>
          <h1>Selct the Quiz !</h1> 
        {userList.map(e => <h3 id='titles' onClick={setclicks} className={e.title}>{e.title}</h3>)}</div>
      </div>
    )
}
