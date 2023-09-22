import { useContext } from "react";
import { TestContext } from "../../context/TestContext";

const Answers = () => {
  const { data } = useContext(TestContext);
  return (
    <section className="w-full md:w-3/4 bg-white rounded shadow p-6 flex flex-col gap-4">
      <div className="text-gray-800 font-bold border-b-2 pb-0.5 text-xl w-fit border-sky-400 mb-2">
        Questions and Answers
      </div>
      <div className="flex flex-col gap-4">
        {data.questionData.map((question, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col gap-4 justify-between border-2 p-4 rounded ${
                data.answers[index] == ""
                  ? "border-yellow-400"
                  : data.answers[index] === question.correct_answer
                  ? "border-green-400"
                  : "border-red-400"
              }`}
            >
              <div className="text-sky-900 font-semibold">
                Q {index + 1}. {data?.questionData[index].question}
              </div>
              <div className="flex flex-col gap-2 font-normal">
                <div className="text-sm text-sky-900">
                  Your Answer:{" "}
                  <span
                    className={`font-semibold ${
                      data.answers[index] == ""
                        ? "text-yellow-500"
                        : data.answers[index] === question.correct_answer
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {data.answers[index] === ""
                      ? "Not Answered"
                      : data.answers[index]}
                  </span>
                </div>
                <div className="text-sm">
                  Correct Answer:{" "}
                  <span className="font-semibold text-green-600">
                    {question.correct_answer}
                  </span>
                </div>
                {question.correct_answer == data.answers[index] &&<div className="text-sm">
                  Score:{" "}
                  <span className="font-semibold text-green-600">
                    {question.difficulty === "easy" ? "+1" : question.difficulty === "medium" ? "+2" : "+4"}
                  </span>
                </div>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Answers;
