import { Link } from "react-router-dom";

function Cta() {
  return (
    <div className="bg-primary text-white flex sm:flex-row flex-col py-12 px-12 gap-12 sm:gap-0 justify-between items-center sm:py-20 sm:px-32 mb-24">
      <h3 className="text-[1.7rem] sm:text-[2.5rem] text-center sm:text-start font-semibold">
        Unlock Your Quiz Wizardry with QuizWiz!
      </h3>

      <div>
        <Link
          to="/login"
          className="block px-12 py-5 rounded-2xl font-semibold self-start text-[1.4rem] sm:text-[1.6rem] bg-cta-bg-color text-white uppercase "
        >
          Take a quiz now !
        </Link>
      </div>
    </div>
  );
}

export default Cta;
