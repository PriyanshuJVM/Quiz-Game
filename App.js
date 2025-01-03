import React,{ useState } from 'react';
import Home from './components/Home.js';
import Quiz from './components/Quiz.js';
import End from './components/End.js';
import {QuizContext} from './Helper/contexts';
import './App.css';
function App() 
{
  const [gameState,setGameState]=useState("menu");
  const [score,setScore]=useState(0);
  const [times,setTimes]=useState(0);
  return(
    <div class="quiz-app">
    <header>
    </header>
    <main>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore, times, setTimes }}>
        {gameState === "menu" && <Home />}
        {gameState === "Quiz" && <Quiz />}
        {gameState === "End" && <End />}
        {gameState === "triesExceeded" && <h1 class="tries-exceeded">Tries Exceeded</h1>}
        {gameState === "timeUp" && <h1 class="time-up">Time's Up!</h1>}
      </QuizContext.Provider>
    </main>
    <footer>
      <p>&copy; 2025 Quiz App - Enhance your knowledge!</p>
    </footer>
  </div>  
  );
}
export default App;
