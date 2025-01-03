import React,{useContext} from "react";
import {QuizContext} from '../Helper/contexts';

export default function Home()
{
    const {setGameState}=useContext(QuizContext);
    return(
        
        <div className="start-quiz">
        <div className="container">
        <h1>Welcome to the Ultimate Quiz</h1>
   <button className="start-quiz-button" onClick={() => setGameState("Quiz")}>
             Start Quiz
    </button>
  </div>
</div>

    )
}