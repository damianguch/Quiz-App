import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import qBank from './Components/QuestionBank';
import Questions from './Components/Questions';
import Score from './Components/Score';
import './App.css';

const App = () => {
  // eslint-disable-next-line
  const [questions, setQuestions] = useState(qBank);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  // set time for each question
  const [timer, setTimer] = useState(10);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isLastq, setIsLastq] = useState(false);

  const questionTimer = () => {
    setTimer((prevTimer) => {
      if (prevTimer > 0) return prevTimer - 1;
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      // Reset timer for the next question
      return 10;
    });
  };

  useEffect(() => {
    if (quizStarted) {
      const interval = setInterval(questionTimer, 1000);

      return () => clearInterval(interval);
    }
  }, [currentQuestion, quizStarted]);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 2 === questions.length) {
      setIsLastq(true);
    }
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setTimer(10);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div
      className="card container mt-4 
		d-flex justify-content-center 
		align-items-center pb-4"
      style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 className="text-success mt-2">Exam Test Engine</h1>
      <h3 className=" mt-2">React Quiz App</h3>
      <div>
        {!quizStarted ? (
          <div className="App">
            <div className="card-body">
              <h2 className="card-title">Start Test</h2>
              <button className="btn btn-success" onClick={startQuiz}>
                Start Test
              </button>
            </div>
          </div>
        ) : currentQuestion < questions.length ? (
          <Questions
            questions={questions}
            handleNextQuestion={handleNextQuestion}
            currentQuestion={currentQuestion}
            handleAnswerClick={handleAnswerClick}
            timer={timer}
            isLastq={isLastq}
          />
        ) : (
          <Score
            score={score}
            setScore={setScore}
            setCurrentQuestion={setCurrentQuestion}
            setQuizStarted={setQuizStarted}
            setIsLastq={setIsLastq}
            setTimer={setTimer}
          />
        )}
      </div>
    </div>
  );
};

export default App;
