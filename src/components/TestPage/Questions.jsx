import { useContext } from "react";
import { TestContext } from "../../context/TestContext";

const Questions = ({ currentQuestion, setCurrentQuestion }) => {
  const { data } = useContext(TestContext);
  const handleQuestionChange = (index) => {
    setCurrentQuestion(index);
  };

  return (
    <div className="flex flex-col gap-3 h-fit md:w-1/4">
    <div className="grid sm:grid-cols-8 grid-cols-8 md:grid-cols-4 gap-2 p-2 bg-gray-100 shadow rounded w-full h-fit justify-center items-center">
      {data?.questionData?.map((question, index) => (
        <div
          key={index}
          className={`${
            data.answers[index] ? 'bg-sky-300 hover:bg-green-400' : "bg-gray-200 hover:bg-gray-300"
          } p-2 md:w-auto w-full flex justify-center items-center rounded cursor-pointer`}
          onClick={() => handleQuestionChange(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
    <div className="flex flex-col items-start gap-2">
      <div className="flex flex-row gap-2 justify-center items-center">
        <div className="w-4 h-4 bg-sky-300"></div>
        <p className="text-sm">Answered</p>
      </div>
      <div className="flex flex-row gap-2 justify-center items-center">
        <div className="w-4 h-4 bg-gray-200"></div>
        <p className="text-sm">Not Answered</p>
      </div>
    </div>
    </div>
  );
};

export default Questions;
