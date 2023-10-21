import { useProfile } from "../contexts/ProfileContext";

/**
 * Renders a button based on the state provided by the `useProfile` hook.
 * The button changes its appearance and behavior depending on the value of the `answer`, `index`, and `numQuestionsLength` variables.
 *
 * @returns {JSX.Element|null} The rendered button component or null if `answer` is null.
 */
function NextBtn() {
  const { answer, index, numQuestionsLength, dispatch } = useProfile();
  if (answer === null) return null;
  if (index + 1 < numQuestionsLength)
    return (
      <button
        className="text-[1.8rem]  border-2 border-neutral-500 rounded-full text-left py-2 sm:py-3 px-8 sm:px-12  justify-self-end hover:bg-neutral-200"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index + 1 === numQuestionsLength)
    return (
      <button
        className="text-[1.8rem]  border-2 border-green-600 bg-green-600 text-white rounded-full text-left py-2 sm:py-3 px-8 sm:px-12"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextBtn;
