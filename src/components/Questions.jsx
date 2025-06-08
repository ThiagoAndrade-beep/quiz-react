import React, { useState } from 'react'
import './question.css'
import Result from './Result'

const quizData = [
    {
        question: "Em React, qual hook é usado para executar um efeito colateral após a renderização do componente?",
        options: ["useState", "useEffect", "useCallback", "useMemo"],
        answer: "useEffect"
    },
    {
        question: "No HTML, qual atributo é usado para abrir um link em uma nova aba?",
        options: ["href=_blank", "target=new", "target=_blank", "open=new"],
        answer: "target=_blank"
    },
    {
        question: "Em CSS, qual é o valor padrão da propriedade position?",
        options: ["relative", "absolute", "static", "fixed"],
        answer: "static"
    },
    {
        question: "Em JavaScript, qual é a saída de typeof null?",
        options: ["null", "undefined", "object", "boolean"],
        answer: "object"
    },
    {
        question: "Em CSS, qual seletor é usado para aplicar estilos apenas quando o mouse está sobre um elemento?",
        options: [":active", ":focus", ":checked", ":hover"],
        answer: ":hover"
    },
    {
        question: "No React, qual é o papel da key quando usamos .map() para renderizar listas?",
        options: ["Define o estilo do componente", "Identifica elementos únicos na lista para otimizar a renderização", "Cria uma referência para o DOM", "Atualiza automaticamente os estados"],
        answer: "Identifica elementos únicos na lista para otimizar a renderização"
    },
    {
        question: "Em JavaScript, o que == faz que === não faz?",
        options: ["Compara objetos", "Retorna verdadeiro sempre", "Compara tipos diferentes convertendo-os automaticamente", "Impede erros de compilação"],
        answer: "Compara tipos diferentes convertendo-os automaticamente"
    },
    {
        question: "Qual é a principal diferença entre props e state em React?",
        options: ["props são imutáveis e state é mutável", "Ambos são imutáveis", "state é passado de pai para filho", "props são usadas apenas em componentes de classe"],
        answer: "props são imutáveis e state é mutável"
    },
    {
        question: "Você quer criar um botão em React que, ao ser clicado, altere a cor de fundo de um div. Qual abordagem está correta?",
        options: ["Usar onClick no botão e alterar o estilo diretamente com document.querySelector()", "Usar onClick e alterar o estilo com useEffect sem state", "Criar um state para a cor e usar onClick para atualizar esse state", "Usar getElementById dentro do JSX para mudar o estilo"],
        answer: "Criar um state para a cor e usar onClick para atualizar esse state"
    },
    {
        question: "Qual é a forma correta de capturar o valor digitado em um input controlado no React?",
        options: ["Usando document.getElementById()", "Através da propriedade value e o evento onChange", "Através de window.prompt()", "Com a tag <script> no HTML"],
        answer: "Através da propriedade value e o evento onChange"
    },
]

const Questions = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const [selectedOptions, setSelectedOptions] = useState({})

    const handleOptionsChange = (questionIndex, option) => {
        setSelectedOptions(prev => ({
            ...prev,
            [questionIndex]: option
        }))
    }

    const handleNext = () => {

        if (!selectedOptions[currentQuestionIndex]) {
            return
        }

        setCurrentQuestionIndex(prev => prev + 1)
    }

    const handlePrev = () => {
        setCurrentQuestionIndex(prev => prev - 1)
    }

    const [result, setResult] = useState('componentPrincipal')
    const [score, setScore] = useState(0)

    const handleResult = () => {

        if (!selectedOptions[currentQuestionIndex]) {
            return
        }

        let correctCount = 0

        quizData.forEach((item, index) => {
            const userAswer = selectedOptions[index]
            if (userAswer === item.answer) {
                correctCount++
            }
        })

        setScore(correctCount)
        setResult('componentResult')
    }

    if (result === 'componentResult') {
        return <Result maxScore={score} selectedOptions={selectedOptions} quizData={quizData}/>
    }

    return (
        <div className='inputs-control'>
            <div className='inputs'>
                <h1 className='title'>{quizData[currentQuestionIndex].question}</h1>

                {quizData[currentQuestionIndex].options.map((option, optionIndex) => (
                    <div className='option-container' key={optionIndex}>
                        <label>
                            <input type="radio"
                                name={`question-${currentQuestionIndex}`}
                                value={option}
                                checked={selectedOptions[currentQuestionIndex] === option}
                                onChange={() => handleOptionsChange(currentQuestionIndex, option)} />
                            {option}
                        </label>
                    </div>
                ))}

                <div className="quiz-actions">
                    {currentQuestionIndex > 0 && (<button onClick={handlePrev}>Voltar</button>)}
                    {currentQuestionIndex < quizData.length - 1 ? (<button onClick={handleNext}>Next</button>) : (<button onClick={handleResult}>Finalizar</button>)}
                </div>
            </div>
        </div>
    )
}

export default Questions