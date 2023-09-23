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
    // for updating the user details in the state
    case "UPDATE_USER":
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    // for setting the question data in the state
    case "SET_QUESTION_DATA": {
      const newQuestionData = action.payload.map((q) => {
        q.question = q.question.replace(/(&[^;]+;)/gi, (match) => {
          return new DOMParser().parseFromString(match, "text/html").body
            .textContent;
        });
        const newCorrectAnswer = q.correct_answer.replace(
          /(&[^;]+;)/gi,
          (match) => {
            return new DOMParser().parseFromString(match, "text/html").body
              .textContent;
          }
        );
        let options = [...q.incorrect_answers, q.correct_answer];
        options = options.map((option) => {
          return option.replace(/(&[^;]+;)/gi, (match) => {
            return new DOMParser().parseFromString(match, "text/html").body
              .textContent;
          });
        });
        const shuffledOptions = options.sort(() => Math.random() - 0.5);
        return {
          ...q,
          correct_answer: newCorrectAnswer,
          visited: false,
          options: shuffledOptions,
        };
      });
      return {
        ...state,
        questionData: newQuestionData,
      };
    }
    // for setting the initial answers in the state to empty string
    case "INITIAL_ANSWERS": {
      const initialAnswers = state.questionData.map(() => {
        return "";
      });
      return {
        ...state,
        answers: initialAnswers,
      };
    }
    // for updating the total time in the state
    case "UPDATE_TOTAL_TIME": {
      return {
        ...state,
        totalTime: 1800 - action.payload,
      };
    }
    // for updating the visited status of the question
    case "UPDATE_VISITED": {
      const newQuestionData = [...state.questionData];
      newQuestionData[action.payload].visited = true;
      return {
        ...state,
        questionData: newQuestionData,
      };
    }
    // for updating the answers in the state to the corresponding question
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
