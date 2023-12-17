import { useState } from "react"

function App() {

  const questions = [
    {
      question: 'Where is Kubwa?',
      answers: [
        { answerOption: 'Lagos', isAnswer: false },
        { answerOption: 'Benin', isAnswer: false },
        { answerOption: 'Warri', isAnswer: false },
        { answerOption: 'Abuja', isAnswer: true },
      ],
    },
    {
      question: 'When did Nigeria gain Independence?',
      answers: [
        { answerOption: '1978', isAnswer: false },
        { answerOption: '1960', isAnswer: true },
        { answerOption: '1992', isAnswer: false },
        { answerOption: '1994', isAnswer: true },
      ],
    },
 
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { answerOption: 'Earth', isAnswer: false },
        { answerOption: 'Mars', isAnswer: true },
        { answerOption: 'Venus', isAnswer: false },
        { answerOption: 'Jupiter', isAnswer: false },
      ],
    },
  ];

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(0);
  const [result, setResult] = useState(0);

  function checkAnswer(answer) {
    if (answer.isAnswer) {
      setResult(result + 1)
    }
  }

  function updateDisplay(answer) {
    checkAnswer(answer)
    setcurrentQuestion(currentQuestion + 1);

    if (currentQuestion +1 < questions.length) {
      setShowResult(1)
    }

  }
  return (
    <div className="App">
      {
        showResult === 0 ?
          <div className="">

            <div className="progress">{currentQuestion + 1} / {questions.length}</div>
            <div className="questions">
              {questions[currentQuestion].question}
            </div>
            <div className="answers">{
              questions[currentQuestion].answers.map((answer) => (
                <li>
                  <span className="btn" onClick={()=>{updateDisplay(answer)}}>{answer.answerOption}</span>
                </li>
              ))
            }</div>
          </div>
          :
          <div className="showResult">
            Your result is:{result}
          </div>
      }

    </div>
  );
}

export default App;
