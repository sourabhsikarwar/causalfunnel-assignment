import { useContext } from "react";
import { questionId } from "../../constants/questions";
import { TestContext } from "../../context/TestContext";

const SelectQuestion = () => {
  const { data, dispatch } = useContext(TestContext);
  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_QUESTIONS",
      payload: e.target.checked,
      id: e.target.value,
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-bold text-sky-900">Select Questions:</div>
      <div className="flex flex-row gap-8 flex-wrap">
      {questionId.map((question) => (
        <div key={question.id} className="flex flex-col gap-2">
          <h3 className="font-bold mb-2">{question.chapter}</h3>
          {question.questions.map((q) => (
            <div key={q.id} className="flex flex-row gap-2 items-center">
              <input
                type="checkbox"
                id={q.id}
                name={q.questionId}
                value={q.questionId}
                checked={data.questions.includes(q.questionId)}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label htmlFor={q.id}>{q.questionId}</label>
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
};

export default SelectQuestion;
