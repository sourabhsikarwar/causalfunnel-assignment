import { useContext } from "react";
import { TestContext } from "../context/TestContext";
import { Link } from "react-router-dom";
import { fetchData } from "../services/api";
import { useQuery } from "react-query";

const Start = () => {
  const { data, dispatch } = useContext(TestContext);

  // fetching the data using react-query library and storing it in the context state
  const {
    data: questionData,
    isLoading,
    error,
  } = useQuery("questionsData", async () => {
    const response = await fetchData();
    dispatch({ type: "SET_QUESTION_DATA", payload: response.results });
    dispatch({ type: "INITIAL_ANSWERS" });
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <div className="h-4 md:w-1/4 w-1/2 bg-gray-200 animate-pulse rounded"></div>
        <div className="h-32 md:w-1/2 w-full bg-gray-200 animate-pulse rounded"></div>
        <div className="h-8 md:w-1/4 w-1/2 bg-gray-200 animate-pulse rounded"></div>
      </div>
    );
  }
  
  if (error || data.user.name === "" || data.user.email === "") {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="rounded p-4 text-red-500 font-semibold flex flex-col gap-3 items-center">
          <p className="text-lg text-center">Oops, Something went wrong.</p>
          <Link to="/" className="text-sky-900 underline">
            Try again
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-4 justify-center items-center py-8">
      <div className="text-sky-900 font-semibold text-2xl">
        Hello {data?.user?.name}, You test is ready.
      </div>
      <div className="my-2 bg-gray-50 rounded shadow p-4 w-1/2 min-w-fit">
        <h1 className="text-gray-800 font-bold border-b-2 pb-0.5 w-fit border-sky-400 mb-3">
          Instructions:
        </h1>
        <ul className="list-decimal list-inside text-sky-800 text-sm flex flex-col gap-2">
          <li>You have total <span className="font-semibold">15</span> questions in the test.</li>
          <li>You have total <span className="font-semibold">30</span> minutes to complete the test.</li>
          <li>
            Easy, medium and hard questions are have
            <span className="font-semibold"> +1, +2 and +4 </span>
            marks respectively.
          </li>
          <li><span className="font-semibold">No negative</span> markings will be there.</li>
        </ul>
      </div>
      <Link to="/test">
        <button className="py-2 px-4 bg-sky-300 hover:bg-sky-400 rounded shadow">
          Take Test
        </button>
      </Link>
    </section>
  );
};

export default Start;
