import { useContext, useState } from "react";
import { TestContext } from "../context/TestContext";
import { Link } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import { useNavigate } from "react-router-dom";
import {
  Questions,
  Question,
  Pagination,
  Timer,
  EndModal,
} from "../components";

const TestPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const { data, dispatch } = useContext(TestContext);

  const handlePageChange = (action) => {
    if (action === "prev") {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1800);

  const { totalSeconds, seconds, minutes } = useTimer({
    expiryTimestamp: time,
    onExpire: () => {
      dispatch({ type: "UPDATE_TOTAL_TIME", payload: time });
      navigate("/result", { replace: true });
    },
  });
  if (data?.questionData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <div className="text-red-500 font-semibold text-xl">
          No test to show.
        </div>
        <Link to="/" className="text-sky-900 font-semibold underline">
          Go back to home
        </Link>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="py-8">
        <Timer minutes={minutes} seconds={seconds} />
      </div>
      <div className="flex md:flex-row flex-col gap-4">
        <Questions
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
        <div className="flex flex-col gap-4 w-full">
          <Question currentQuestion={currentQuestion} />
          <Pagination
            currentQuestion={currentQuestion}
            handlePageChange={handlePageChange}
            totalSeconds={totalSeconds}
          />
          <button
            className="bg-sky-300 hover:bg-sky-400 px-4 md:w-1/4 py-2 rounded-full shadow w-1/2 mx-auto my-4"
            onClick={() => setOpenModal(true)}
          >
            Submit
          </button>
        </div>
      </div>

      {/* modal */}
      <EndModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        totalSeconds={totalSeconds}
      />
    </div>
  );
};

export default TestPage;
