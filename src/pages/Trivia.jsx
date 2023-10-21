import { useProfile } from "../contexts/ProfileContext";
import Spinner from "../components/Spinner";

/**
 * Renders a form for users to select a category, difficulty level, and number of questions for a trivia quiz.
 * @returns {JSX.Element} The rendered form for selecting quiz options.
 */

// Define the available categories for the quiz
const categories = [
  "science",
  "film_and_tv",
  "music",
  "history",
  "sport_and_leisure",
  "geography",
  "general_knowledge",
  "food_and_drink",
];

// Define the available categories for the quiz
const difficulties = ["easy", "medium", "hard"];

function TriviaApp() {
  // Destructure the necessary values and functions from the useProfile hook
  const {
    selectedCategory,
    selectedDifficulty,
    numQuestions,
    handleFetchQuestions,
    chooseNumQuestions,
    chooseCategory,
    chooseDifficulty,
    loading,
  } = useProfile();

  // If the loading state is true, display a spinner
  if (loading) return <Spinner />;

  return (
    <div className=" mx-auto p-6 sm:p-12 rounded shadow-lg max-w-[65rem] ">
      <h1 className="text-[2rem]  sm:text-[3rem] text-[#1C6E8C] font-semibold mb-8 text-center">
        🌟 Trivia Time 🌟
      </h1>
      <h2 className="  text-[1.5rem]  sm:text-[2.5rem] text-[#144d62] text-center mb-12">
        Ready to Challenge Your Knowledge and Have Fun?
      </h2>
      <form>
        <div className="mb-8">
          <label className="block text-secondary text-[1.5rem] sm:text-[2rem] pb-2">
            Choose a Fascinating Category:
          </label>
          <div className="flex space-x-4 flex-wrap gap-x-6">
            {/* Render a radio button for each category */}
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center text-[1.3rem] sm:text-[1.8rem]"
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => chooseCategory(category)}
                  className="mr-2"
                />
                {/* Convert the category name to a readable format */}
                {category
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-secondary text-[1.5rem] sm:text-[2rem] pb-2">
            Select Your Challenge Level:
          </label>
          <div className="flex space-x-4 flex-wrap">
            {/* Render a radio button for each difficulty level */}
            {difficulties.map((difficulty) => (
              <label
                key={difficulty}
                className="flex items-center text-[1.3rem] sm:text-[1.8rem]"
              >
                <input
                  type="radio"
                  name="difficulty"
                  value={difficulty}
                  checked={selectedDifficulty === difficulty}
                  onChange={() => chooseDifficulty(difficulty)}
                  className="mr-2"
                />
                {/* Capitalize the first letter of the difficulty level */}
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <label
            htmlFor="numQuestions"
            className="block text-secondary text-[1.5rem] sm:text-[2rem]"
          >
            Number of Questions to Embark On:
          </label>
          <input
            type="number"
            id="numQuestions"
            value={numQuestions}
            onChange={(e) => chooseNumQuestions(e.target.value)}
            className="w-full border rounded py-4 px-8 text-[1.3rem] sm:text-[1.8rem] focus:outline-0"
          />
        </div>
        <button
          type="button"
          onClick={handleFetchQuestions}
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-400 text-[1.6rem] flex justify-center w-full"
        >
          Start Your Quiz Adventure
        </button>
      </form>
    </div>
  );
}

export default TriviaApp;
