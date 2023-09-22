import { createContext, useReducer } from "react";

export const TestContext = createContext();

const initialState = {
  user: {
    email: "",
    name: "",
  },
  totalTime: 0,
  questionData: [],
  answers: [],
};

const testReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    case "SET_QUESTION_DATA": {
      const newQuestionData = action.payload.map((q) => {
        q.question = q.question.replace(/(&[^;]+;)/gi, (match) => {
          return new DOMParser().parseFromString(match, "text/html").body
            .textContent;
        });
        let options = [
          ...q.incorrect_answers,
          q.correct_answer,
        ];
        options = options.map((option) => {
          return option.replace(/(&[^;]+;)/gi, (match) => {
            return new DOMParser().parseFromString(match, "text/html").body
              .textContent;
          });
        });
        const shuffledOptions = options.sort(() => Math.random() - 0.5);
        return {
          ...q,
          options: shuffledOptions,
        };
      });
      return {
        ...state,
        questionData: newQuestionData,
      };
    }
    case "INITIAL_ANSWERS": {
      const initialAnswers = state.questionData.map(() => {
        return "";
      });
      return {
        ...state,
        answers: initialAnswers,
      };
    }
    case "UPDATE_TOTAL_TIME": {
      return {
        ...state,
        totalTime: 1800 - action.payload,
      };
    }
    case "UPDATE_ANSWERS": {
      const newAnswers = [...state.answers];
      newAnswers[action.payload.index] = action.payload.answer;
      return {
        ...state,
        answers: newAnswers,
      };
    }
    default:
      return state;
  }
};

export const TestContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(testReducer, initialState);

  return (
    <TestContext.Provider
      value={{
        data: state,
        dispatch,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};
