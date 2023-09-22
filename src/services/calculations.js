export const calculate = (questions, answers) => {
  let totalScore = 0;
  let score = 0;
  let notAnswered = 0;
  let wrong = 0;

  const correct = questions.filter((question, index) => {
    let difficulty = question.difficulty;
    let questionScore =
      difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 4;
    totalScore += questionScore;
    if (answers[index] === "") {
      notAnswered++;
    }
    if (answers[index] === question.correct_answer) {
      score += questionScore;
    }
    return answers[index] === question.correct_answer;
  }).length;

  wrong = 15 - correct - notAnswered;

  return {
    correct,
    score,
    totalScore,
    notAnswered,
    wrong,
  };
};

export const calculateTime = (time) => {
  let totalMinutes = Math.floor(time / 60);
  let totalSeconds = time % 60;
  return `${totalMinutes > 0 ? totalMinutes + " minutes" : ""} ${
    totalSeconds + " seconds"
  }`;
};
