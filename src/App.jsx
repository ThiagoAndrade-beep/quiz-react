import './App.css'
import pessoa from './assets/pessoa.png'
import { GiTennisBall } from "react-icons/gi";
import Questions from './components/Questions';


function App() {

  return (
    <>
    <header>
        <div className="header-title">
          <GiTennisBall />
          <h2>QuizMaster</h2>
        </div>
        <div className="header-nav">
          <p>Home</p>
          <p>Quizzes</p>
          <p>Leaderboard</p>
          <p>Profile</p>
          <img src={pessoa} alt="pessoa" />
        </div>
    </header>

    <div className="quiz-container">
      <div className='quiz-questions'>
        <Questions />
      </div>
    </div>
    </>
  )
}

export default App
