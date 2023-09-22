import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TestContext } from "../../context/TestContext";
import emailjs from "@emailjs/browser";
import { calculate, calculateTime } from "../../services/calculations";

const Report = () => {
  const { data } = useContext(TestContext);
  const [message, setMessage] = useState({});

  const { correct, wrong, totalScore, score, notAnswered } = calculate(
    data.questionData,
    data.answers
  );
  const resultTime = calculateTime(data.totalTime);

  const mailContent = {
    name: data.user.name,
    email: data.user.email,
    score: score,
    totalScore: totalScore,
    rightAnswers: correct,
    wrongAnswers: wrong,
    notAnswered: notAnswered,
    resultTime: resultTime,
  };

  const sendEmail = () => {
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        mailContent,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setMessage({
            message: "Email sent successfully!",
            type: "success",
          });
        },
        (error) => {
          setMessage({
            message: "Email not sent!",
            type: "error",
          });
        }
      );
  };

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
          <span className="font-semibold">{correct}/15</span>
        </div>
        <div className="text-sky-900">
          Total Wrong Answers: <span className="font-semibold">{wrong}/15</span>
        </div>
        <div className="text-sky-900">
          Questions not answered:{" "}
          <span className="font-semibold">{notAnswered}/15</span>
        </div>
        <div className="text-sky-900">
          Score:{" "}
          <span className="font-semibold">
            {score}/{totalScore}
          </span>
        </div>
      </div>
      <Link to="/">
        <button className="py-2 px-4 my-3 bg-sky-300 hover:bg-sky-400 rounded shadow w-full">
          Start new test
        </button>
      </Link>
      <button
        className="py-2 px-4 bg-red-400 hover:bg-red-500 rounded shadow w-full"
        onClick={sendEmail}
      >
        Get Result on Email!
      </button>
      {message.message && (
        <div
          className={`text-center font-semibold rounded ${
            message.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message.message}
        </div>
      )}
    </section>
  );
};

export default Report;
