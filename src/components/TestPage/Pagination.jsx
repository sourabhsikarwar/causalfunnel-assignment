import { useContext } from "react";
import { TestContext } from "../../context/TestContext";

const Pagination = ({
  currentQuestion,
  handlePageChange,
}) => {
  const { data } = useContext(TestContext);
  return (
    <section className="flex flex-row justify-between items-center">
      {currentQuestion > 0 && (
        <button
          className="bg-white border-2 border-sky-300 hover:bg-sky-300 hover:text-white duration-300 py-1 px-4 rounded shadow"
          onClick={() => handlePageChange("prev")}
        >
          Prev
        </button>
      )}
      {currentQuestion < data?.questionData.length - 1 && (
        <button
          className="bg-white border-2 border-sky-300 hover:bg-sky-300 hover:text-white duration-300 py-1 px-4 rounded shadow ml-auto"
          onClick={() => handlePageChange("next")}
        >
          Next
        </button>
      )}
    </section>
  );
};

export default Pagination;
