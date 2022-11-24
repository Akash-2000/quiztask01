import React, { useRef } from 'react'
import { useState } from 'react'
import './Question.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Question(props) {
     const [file,setfile] = useState(null)
     const [question,setQuestion] = useState("")
     const [type,setType] = useState("")
    const [optionSize,setoptionSize]= useState(0)
    const [Optionsvalues,setOptionvalues] = useState("")
     const setcount = useRef()
     const [textof,settextof]= useState("")
     const setoption = useRef()
     const findee = useRef()
     const findee1 = useRef()
     const findee2 = useRef()
    
     const row=[]
     const Navigate = useNavigate()
     const valueof = useRef()
     console.log(props.data1)
     const checkme = (e)=>{
        console.log(e.target.value)
        setType(e.target.value)
     }
    const checkVlaue = (e)=>{
            row.push(e.target.value)
    }
    const questionof = (e)=>{
        setQuestion(e.target.value)
    }
    console.log(row)
     const setvalue = (e)=>{

        e.preventDefault()
                 console.log(setcount.current.value)
        if(Number(setcount.current.value)>6){
            alert("Options Size must be under 6")
        }
        else{
            setoptionSize(setcount.current.value)
            console.log(Optionsvalues)
        }
       
     }

      const setvalueofin = (e)=>{
            console.log(e.target.value)
            settextof(e.target.value)
            console.log(textof)
     }
     const setoptions = (e)=>{
            e.preventDefault()
            if(row.length > 0 && type=="Options"){
                setOptionvalues(row)
            }
            else if(type=='Input'||type=="Brief"){
                setOptionvalues(textof)
            }
          
     } 
    
     const printNumbers0To6 = () => {
    const row = [];
    for (var i = 0; i < optionSize; i++) {
      row.push(<input type="text" className='optionss'  ref={setoption} onBlur={checkVlaue}/>);
    }
    if(optionSize > 0){
        row.push(<><button type='submit' onClick={setoptions}>Submit options</button><br /></>)
    }
    console.log(row)
    return row;
  };
  const questionarray = (e)=>{
    e.preventDefault()
    const data = {
            qname:question,
            option:Optionsvalues,
            answer:valueof.current.value
        }
        props.data1.Questions.push(data)
        console.log(props.data1.Questions)
        
    
    
    
  }
  const newQuiz = ()=>{
    setfile("")
    findee.current.value=""
     findee1.current.value=""
     setoption.current.value=""
     setcount.current.value=0
     valueof.current.value=""
     setType("")
  }
  const Submittoback = ()=>{
        axios.post('https://taskquiz.herokuapp.com/data',props.data1).then((res)=>{
            console.log(res.statusText)
            if(res.statusText == 'OK'){
            alert("Your Quiz sucessfully created")
            Navigate("/")

            }
        },
        (error) => {
          console.log(error);
          alert(error.message)
        })
  }
  return (
    <div className='Question'>

        <div className='Question1'>
        <h1>Create Your Own Quiz</h1>
                      {file &&(
          <img  className="writeimg" src={URL.createObjectURL(file)}/>
      ) }
            <form action="" onSubmit={questionarray}>
                <label htmlFor="">Upload</label>
                <input type="file"  ref={findee} onChange={e =>setfile(e.target.files[0])} /><br></br>
                <label>Enter the Question!</label><br/>
                <input type="text" onChange={questionof} ref={findee1}/><br />
                <label>Please select your type of your answer:</label><br />
                  <input type="radio" id="html" name="fav_language" value="Options" onChange={checkme}/>
                  <label >Options</label><br/>
                  <input type="radio" id="css" name="fav_language" value="Input" onChange={checkme}/>
                  <label >Input</label><br/>
                  <input type="radio" id="javascript" name="fav_language" value="Brief" onChange={checkme}/>
                     <label for="Brief">Brief</label><br/>
                {type == "Options" ? <><label htmlFor="">Enter the number of options needed</label><br /><input type="Number" ref={setcount}/> <button onClick={setvalue}>ok</button><br /></> : type == "Input" ? <><input type="text" onChange={setvalueofin} /> <button onClick={setoptions}>ok</button><br /></>: type == "Brief" ?<><textarea name="" id="" cols="30" rows="10" onChange={setvalueofin}></textarea><button onClick={setoptions}>ok</button><br /></>:<input type="text"  style={{ display: "none" }} />}
                {optionSize > 0 && type == "Options"?  printNumbers0To6():<input type="text"  style={{ display: "none" }} />}
                <label>Enter answer</label><br/>
                <input type="text"  ref={valueof}/><br/>
                <button type="submit">Submit Answer</button>
            </form>
            <div className='butonss'>
            <button type="submit"  className='buttone' onClick={newQuiz}>Cretae next Quiz</button>
            <button  className='buttone2' onClick={Submittoback}>Complete Quiz cretaion</button>
            </div>
        </div>
            

    </div>
  )
}
