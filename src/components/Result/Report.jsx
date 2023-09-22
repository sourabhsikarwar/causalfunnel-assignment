import { useContext } from "react";
import { Link } from "react-router-dom";
import { TestContext } from "../../context/TestContext";

const Report = () => {
  const { data } = useContext(TestContext);
  let notAnswered = 0;
  const rightAnswers = data.answers.filter((answer, index) => {
    if (answer === "") {
      notAnswered++;
    }
    return answer === data.questionData[index].correct_answer;
  }).length;
  const score = rightAnswers * 2;
  const wrongAnswers = 15 - rightAnswers - notAnswered;

  const totalMinutes = Math.floor(data.totalTime / 60);
  const totalSeconds = data.totalTime % 60;
  const resultTime = `${totalMinutes > 0 ? totalMinutes + " minutes" : ""} ${
    totalSeconds + " seconds"
  }`;

  return (
    <section className="flex flex-col gap-4 w-full md:w-1/4">
      <div className="bg-white rounded shadow h-fit flex flex-col gap-3 p-6 w-full text-sm">
        <div className="text-gray-800 font-bold border-b-2 pb-0.5 text-xl w-fit border-sky-400 mb-2">
          Report
        </div>
        <div className="text-sky-900">
          Total Time Taken: <span className="font-semibold">{resultTime}</span>
        </div>
        <div className="text-sky-900">
          Total Correct Answers:{" "}
          <span className="font-semibold">{rightAnswers}/15</span>
        </div>
        <div className="text-sky-900">
          Total Wrong Answers:{" "}
          <span className="font-semibold">{wrongAnswers}/15</span>
        </div>
        <div className="text-sky-900">
          Questions not answered:{" "}
          <span className="font-semibold">{notAnswered}/15</span>
        </div>
        <div className="text-sky-900">
          Score: <span className="font-semibold">{score}/30</span>
        </div>
      </div>
      <Link to="/">
        <button className="py-2 px-4 my-3 bg-sky-300 hover:bg-sky-400 rounded shadow w-full">
          Start new test
        </button>
      </Link>
    </section>
  );
};

export default Report;
