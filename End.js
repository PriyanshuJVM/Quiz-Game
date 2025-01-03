import React from "react";
import "../App.css";
import { useContext/*,useEffect,useState*/ } from "react";
import { QuizContext } from "../Helper/contexts";
import { Question } from "../Helper/QuestionBank";
export default function End()
{ 
    const {score,setScore,/*gameState,*/setGameState,setTimes}=useContext(QuizContext);

    const restartQuiz = () => {
        setTimes((prevTimes) => {
            const newTimes = prevTimes + 1;
            if (newTimes < 3) {
                setScore(0);
                setGameState("menu");
            } else {
                setGameState("triesExceeded");
            }
            return newTimes;
        });
    };
      
    return(
        <div className="EndScreen">
        <h1>Quiz Finished</h1>
        <h1 id="TotalScore">
          Total Score: {score} / {Question.length}
        </h1>
        <div id="Restart">
          <h2>To Restart the Quiz:</h2>
          <button onClick={restartQuiz} id="Reset">RESET</button>
        </div>
      </div>
      
    );
  };