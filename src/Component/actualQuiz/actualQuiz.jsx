import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './actual.css'
export default function ActualQuiz() {
    var title = localStorage.getItem("title")
    var data = {"title":title}
    const [questions,setQuestions] = useState(null)
    const [questidx,setidx] = useState(0)
    const [score,setscore] = useState(0)
    const [showscore,setshowscore] = useState(false)
    useEffect(()=>{
        getquest();
    },[])

     const getquest = async() => {
    await axios.post('https://taskquiz.herokuapp.com/put',data)
      .then(
        (result) => {
         setQuestions(result.data[0].Questions);
        },
        (error) => {
          console.log(error);
          setQuestions(null);
        }
      );
  };
  try{
    console.log(questions[0])
    var currentidx = [questions[questidx]]
    console.log(currentidx)
    currentidx.map(e=>{console.log(e.option)})
  }
  catch(error){
    console.log(error)
  }

  const optionClicked = (idx)=>{
    currentidx.map(e => {e.answer == e.option[idx]?
     setscore(score+1):console.log(e.answer ==  e.option[idx])})
     console.log(questions.length)
      const nextQ = questidx+1
      if( nextQ < questions.length){
            setidx(nextQ)
      }
      else{
        console.log('Done')
        setshowscore(!showscore)
      }
  }

  const reset = ()=>{
    setidx(0)
    setscore(0)
    setshowscore(false)
  }

  if(!questions) return <h1>no record found</h1>
  if(!currentidx) return <h1>no record found</h1> 
  return (
            <div className="MainPage">
              <div className="namebox2">
              {showscore? <><h1 className='questions'>Your Score : {score}/{questions.length}</h1> <button className='buttonss' onClick={reset} >Take Quiz again</button></>:
                   <div>
                    <h3>Question {questidx}</h3>
                     {currentidx.map(e => <><h1 className='questions'>{e.qname}</h1> {e.option.map((f,i) => <ul>
                      <li onClick={() =>optionClicked(i)}>{f}</li>
                      </ul>)} </>)}</div>
}
            </div>
            </div>
  )
}
