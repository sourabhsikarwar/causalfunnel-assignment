import { useContext, useEffect, useState } from "react";
import { TestContext } from "../../context/TestContext";
import { MathJax } from "better-react-mathjax";

const Question = ({ currentQuestion }) => {
  const { data, dispatch } = useContext(TestContext);
  const [question, setQuestion] = useState({});

  useEffect(() => {
    if (data.questionData.length > 0) {
      setQuestion(data.questionData[currentQuestion]);
    }
  }, [currentQuestion]);

  const handleQuestions = (e) => {
    dispatch({
      type: "UPDATE_ANSWERS",
      payload: { index: currentQuestion, answer: e.target.value },
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full p-8 rounded bg-gray-50 shadow">
      <div className="flex flex-row justify-between items-center">
        <div className="rounded-md px-2 py-1 bg-sky-300 text-sm">
          {question.category}
        </div>
        <div
          className={`rounded-md py-1 px-2 text-sm ${
            question.difficulty == "medium"
              ? "bg-yellow-400"
              : question.difficulty == "easy"
              ? "bg-green-300"
              : "bg-red-400"
          }`}
        >
          {question.difficulty}
        </div>
      </div>
      <div className="md:text-lg text-sm flex flex-wrap gap-2 items-center font-semibold text-sky-900">
        Q {currentQuestion + 1}. {question.question}
      </div>
      <div className="bg-white p-4 rounded flex flex-col gap-2">
        {question.options?.map((option, index) => {
          return (
            <div key={index} className="flex flex-row gap-2 items-center">
              <input
                type="radio"
                value={option}
                checked={data.answers[currentQuestion] === option}
                id={option}
                className="w-4 h-4 cursor-pointer"
                name={question.question}
                onChange={handleQuestions}
              />
              <label htmlFor={option} className="cursor-pointer">{option}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
