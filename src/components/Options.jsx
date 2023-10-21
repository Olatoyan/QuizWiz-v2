import { useEffect, useState } from "react";

import { useProfile } from "../contexts/ProfileContext";

/**
 * The `Options` function is a React component that displays a list of shuffled options for a given question.
 * It also handles user interaction by allowing them to select an option and dispatching the selected option to the `useProfile` hook.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.question - The question object containing the correct answer and incorrect answers.
 * @returns {JSX.Element} The rendered list of shuffled options as buttons.
 */
function Options({ question }) {
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const { dispatch, answer } = useProfile();
  const hasAnswered = answer !== null;
  const optionLabels = ["A)", "B)", "C)", "D)", "E)", "F)"];

  /**
   * Shuffles the options by combining the correct answer and incorrect answers, and then randomly swapping elements in the array.
   *
   * @param {string} correctAnswer - The correct answer.
   * @param {string[]} incorrectAnswers - The incorrect answers.
   * @returns {string[]} The shuffled options.
   */
  function shuffleOptions(correctAnswer, incorrectAnswers) {
    const options = [...incorrectAnswers, correctAnswer];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }

  useEffect(() => {
    const options = shuffleOptions(
      question.correctAnswer,
      question.incorrectAnswers
    );
    setShuffledOptions(options);
  }, [question.correctAnswer, question.incorrectAnswers]);

  return (
    <div className="flex flex-col gap-6 ">
      {shuffledOptions.map((option, i) => (
        <button
          key={option}
          disabled={hasAnswered}
          className={`${
            hasAnswered
              ? "cursor-not-allowed"
              : "cursor-pointer hover:bg-neutral-200"
          } ${
            hasAnswered
              ? question.correctAnswer === option
                ? "bg-green-500 border-green-500"
                : "bg-red-500 border-red-500"
              : ""
          } ${
            option === answer ? "translate-x-10" : ""
          } text-[1.6rem] sm:text-[1.8rem]  border-2 border-neutral-500 rounded-full text-left py-2 sm:py-4 px-6 sm:px-8 `}
          onClick={() => dispatch({ type: "newAnswer", payload: option })}
        >
          {optionLabels[i]} {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
