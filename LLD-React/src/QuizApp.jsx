import React, { useState } from 'react';
import { questions } from './Json/quiz.json';
import './CSS/quiz.css';
const QuizApp = () => {
    const questionsArr = { ...questions };
    const [quizNumber, setQuizNumber] = useState(0);
    const [mark, setMark] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(-1);
    const [resultPage, setResultPage] = useState(false);
    function handleNext() {

        if (selectedAnswer === questionsArr[quizNumber].correctAnswer)
            setMark(prev => prev + 1);
        setQuizNumber(prev => prev + 1);
        setSelectedAnswer(-1);
    }

    function handleSubmit() {
        if (selectedAnswer === questionsArr[quizNumber]?.correctAnswer) {
            setMark(prev => prev + 1);
        }
        setResultPage(true);
    }
    function handleReset() {
        setResultPage(false);
        setQuizNumber(0);
        setMark(0);
        setSelectedAnswer(-1);
    }
    return (
        <div className="quiz-container">
            <h1 className="heading">Quiz App</h1>
            <div className="quiz-app">
                {!resultPage && <div>
                    <div className="quiz-header">
                        <h4>Topic: React</h4>
                        <p>{quizNumber + 1} /{questions.length}</p>
                    </div>
                    <div className="quiz-question">
                        {questionsArr[quizNumber]?.question}
                    </div>
                    {
                        questionsArr[quizNumber]?.answers.map((answer, index) => {
                            return <div onClick={() => setSelectedAnswer(index)} key={index} data-key={index} className={`quiz-options ${selectedAnswer === index ? "selected" : ""}`}>
                                <p>{answer}</p>
                            </div>
                        })
                    }
                    <div className="button-container" role="group" aria-label="navigation">
                        {questions.length - 1 !== quizNumber && <button disabled={selectedAnswer === -1} onClick={handleNext}>Next</button>}
                        {questions.length - 1 === quizNumber && <button disabled={selectedAnswer === -1} onClick={handleSubmit}>Submit</button>}
                    </div>
                </div>}
                {resultPage && <div className="result-page">
                    <table className="result-table">
                        <tbody>
                            <tr>
                                <th>Total Questions</th>
                                <td>{questions.length}</td>
                            </tr>
                            <tr>
                                <th>Total Marks</th>
                                <td>{mark}</td>
                            </tr>
                            <tr>
                                <th>Correct Answers</th>
                                <td>{mark}</td>
                            </tr>
                            <tr>
                                <th>Wrong Answers</th>
                                <td>{questions.length - mark}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleReset}>Reset</button>
                </div>}
            </div>
        </div >
    );
};

export default QuizApp;
