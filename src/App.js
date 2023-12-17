import react, { useState } from "react"

function App() {

	const questions = [
		{
			question: 'Where is Kubwa',
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
			question: 'Who',
			answers: [
				{ answerOption: 'Lagos', isAnswer: false },
				{ answerOption: 'Benin', isAnswer: false },
				{ answerOption: 'Warri', isAnswer: false },
				{ answerOption: 'Abuja', isAnswer: true },
			],
		},
    {
			question: 'Where is Kubwa',
			answers: [
				{ answerOption: 'Lagos', isAnswer: false },
				{ answerOption: 'Benin', isAnswer: false },
				{ answerOption: 'Warri', isAnswer: false },
				{ answerOption: 'Abuja', isAnswer: true },
			],
		},
    {
			question: 'Where is Kubwa',
			answers: [
				{ answerOption: 'Lagos', isAnswer: false },
				{ answerOption: 'Benin', isAnswer: false },
				{ answerOption: 'Warri', isAnswer: false },
				{ answerOption: 'Abuja', isAnswer: true },
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

  const [currentQuestion, setcurrentQuestion] = useState();
  const [showResult, setShowResult] = useState();
  const [result, setResult] = useState()
  return (
    <div className="App">

      <div className="">
      <div className="progress"></div>
      <div className="questions"></div>
      <div className="answers"></div>
      </div>

    </div>
  );
}

export default App;
