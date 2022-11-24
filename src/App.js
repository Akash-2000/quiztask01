import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './Component/Main_page/MainPage';
import Entername from './Component/EnterName/cretaequiz';
import Question from './Component/Question/Question';
import TakeQuiz from './Component/TakeQuizpage/TakeQuiz';
import ActualQuiz from './Component/actualQuiz/actualQuiz';
function App() {
  const Questions = {
    name:"",
    title:"",
    Questions:[]
  }
  const title = {
    title:""
  }
  return (
    <>

       <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/q1' element={<Question data1={Questions}/>}/>
        <Route path="/name" element={<Entername data={Questions}/>}/>
        <Route path='/main' element={<TakeQuiz title1={title}/>}/>
        <Route path='/actual' element={<ActualQuiz title1={title}/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
