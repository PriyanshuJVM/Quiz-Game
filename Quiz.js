import React,{useState,useContext} from "react";
import {QuizContext} from '../Helper/contexts';
import {Question} from '../Helper/QuestionBank';
export default function Quiz()
{   
     const [currentQuestion,setCurrentQuestion]=useState(0);
     const [optionChosen,setOptionChosen]=useState("");
     const {score,setScore,setGameState,}=useContext(QuizContext);
      
    const nextQuestion = () => {
        if (Question[currentQuestion].answer === optionChosen)
        {
           setScore(score+1);
        }
        setOptionChosen(null); 
        setCurrentQuestion(currentQuestion + 1);
    };
    const finishQuiz=()=>
    {
        if (Question[currentQuestion].answer === optionChosen)
         {
            setScore(score+1);
        }
        setGameState("End")
    }
    const handleOptionClick = (optionId) => {
        setOptionChosen(optionId); 
      };
    return(
        <div className="quiz-question">
  <h1 className="question-title">{Question[currentQuestion].prompt}</h1>
  <div className="options-container">
    <div className="Diff">A.</div>
    <button
      onClick={() => handleOptionClick("optionA")}
      id="optionA"
      className={`option-button ${
        optionChosen === "optionA" ? "selected" : ""
      }`}
    >
      {Question[currentQuestion].optionA}
    </button>
    <div className="Diff">B.</div>
    <button
      onClick={() => handleOptionClick("optionB")}
      id="optionB"
      className={`option-button ${
        optionChosen === "optionB" ? "selected" : ""
      }`}
    >
      {Question[currentQuestion].optionB}
    </button>
    <div className="Diff">C.</div>
    <button
      onClick={() => handleOptionClick("optionC")}
      id="optionC"
      className={`option-button ${
        optionChosen === "optionC" ? "selected" : ""
      }`}
    >
      {Question[currentQuestion].optionC}
    </button>
    <div className="Diff">D.</div>
    <button
      onClick={() => handleOptionClick("optionD")}
      id="optionD"
      className={`option-button ${
        optionChosen === "optionD" ? "selected" : ""
      }`}
    >
      {Question[currentQuestion].optionD}
    </button>
  </div>
  {currentQuestion === Question.length - 1 ? (
    <button className="action-button submit-button" onClick={finishQuiz}>
      Submit Quiz
    </button>
  ) : (
    <button className="action-button next-button" onClick={nextQuestion}>
      Next Question
    </button>
  )}
</div>
    )
}