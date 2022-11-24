import React from 'react'
import './mainpage.css'
import {useNavigate} from "react-router-dom"
export default function MainPage() {
    const navigate = useNavigate();
  return (
    <div className='MainPage'>
        <div className="mainbox">
            <h1>Welcome to the Quiz!</h1>
            <div className="createQuiz">
                <button onClick={()=>navigate("/name") }>Cretae Quiz</button>
            </div>
                <div className="takeQuiz">
                    <button onClick={()=>navigate("/main")}>Take QuiZ</button>
                </div>
        </div>
    </div>
  )
}
