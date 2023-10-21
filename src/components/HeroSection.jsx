import GridBox from "./GridBox";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <GridBox>
      <div className="flex flex-col gap-4 order-1 text-center md:text-start items-baseline">
        <h1 className="text-[3rem]  mt-8 md:text-[4.5rem] lg:text-[5rem] text-primary font-bold max-w-[71.15rem]">
          QuizWiz - Where Learning Meets Fun!
        </h1>
        <p className=" text-[1.8rem] leading-[1.6] max-w-[61.2rem]">
          Are you ready to supercharge your learning experience? QuizWiz is your
          go-to platform for interactive quizzes that make learning fun and
          effective. Whether you’re a student looking to ace your exams or a
          teacher wanting to engage your students, we’ve got you covered.
        </p>
        <div className="mt-6 sm:mt-16 ">
          <Link
            className="block px-12 py-5 rounded-2xl font-semibold self-start text-[1.4rem] sm:text-[1.6rem] bg-cta-bg-color text-white uppercase "
            to="/sign up"
          >
            Take a quiz
          </Link>
        </div>
      </div>
      <div className="w-full order-1">
        <img src="college students-amico.svg" alt="college students" />
      </div>
    </GridBox>
  );
}
