import { useState } from "react"
import '../src/styles/bootstrap.min.css'

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
    let updateQuestion = currentQuestion + 1
    if (updateQuestion === questions.length) {
      setShowResult(1)
    }
    else {
      setShowResult(0)
      setcurrentQuestion(currentQuestion + 1);
    }

  }
  function goBack() {
    setcurrentQuestion(0)
    setShowResult(0)
  }

  return (
    <div className="App mx-auto container col-6 mt-5">
      {
        showResult === 0 ?
          <div className="">

            <div className="h4 rounded p-2 h4">{currentQuestion + 1} / {questions.length}</div>
            <div className="questions my-3 h5">
              {questions[currentQuestion]?.question}
            </div>
            <div className="answers">
              {
                questions[currentQuestion]?.answers.map((answer) => (
                  // <li>
                  <div className="btn btn-secondary w-100 mb-2" onClick={() => { updateDisplay(answer) }}>{answer.answerOption}</div>
                  // </li>
                ))
              }
            </div>
          </div>
          :
          <></>
      }
      {

        showResult === 1 ?
          <>
            <div className="showResult h4">
              Your result is:{result} / {questions.length}
            </div>
            <button className="btn btn-success mt-3" onClick={() => {goBack()}}>Go again</button>
          </>
          :
          <></>
      }



    </div>
  );
}

export default App;
