import { useContext } from "react";
import { TestContext } from "../context/TestContext";
import { Link } from "react-router-dom";
import Report from "../components/Result/Report";
import Answers from "../components/Result/Answers";

const Result = () => {
  const { data } = useContext(TestContext);
  if (data?.questionData.length === 0) {
    return (
      <div className="flex flex-col gap-4 py-8 justify-center items-center">
        <div className="text-red-500 font-semibold text-xl">
          No Result to show.
        </div>
        <Link to="/" className="text-sky-900 font-semibold underline">
          Go back to home
        </Link>
      </div>
    );
  }
  return (
    <section className="flex flex-col gap-6 py-8 justify-center items-start">
      <div className="text-xl text-sky-900 font-semibold p-4 shadow rounded w-full">
        Hey {data?.user?.name}, Your result is here.
      </div>

      <div className="flex md:flex-row flex-col gap-6 w-full">
        <Report />
        <Answers />
      </div>
    </section>
  );
};

export default Result;
