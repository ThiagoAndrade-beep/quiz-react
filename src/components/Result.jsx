import React, { useState } from 'react'
import pessoa from '../assets/pessoa.png'
import './result.css'
import Questions from './Questions'

const Result = ({ maxScore, selectedOptions, quizData }) => {

    const [click, setClick] = useState('componentResult')
    function handleClick() {
        setClick('componentPrincipal')
    }

    if (click === 'componentPrincipal') {
        return <Questions />
    }

    return (
        <div className="result-container">
            <h1>Quiz Results</h1>
            <div className="results-informations">
                <img src={pessoa} alt="pessoa" />
                <p>Your Score: {maxScore}/10</p>
            </div>
            <p className='result-text'>Parabéns! Você acertou {maxScore}/10 no quiz sobre Front-End</p>
            <button className='restart' onClick={handleClick}>Reiniciar Quiz</button>

            <div className='review-questions'>
                <h3>Revise suas respostas:</h3>
                {quizData.map((item, index) => {
                    const userAnswer = selectedOptions[index]
                    const isCorrect = userAnswer === item.answer

                    return (
                        <div key={index} className={`question-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                            <h3>{index + 1}.</h3>
                            <p><strong>Sua resposta:</strong> {userAnswer}.</p>
                            <p><strong>Resposta correta:</strong> {item.answer}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Result