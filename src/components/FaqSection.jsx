import { useState } from "react";
import GridBox from "./GridBox";

const faqEntries = [
  {
    title: "How do I sign up for QuizWiz?",
    text: "Joining QuizWiz is a breeze! To get started, click on the 'Sign Up Now' button in the header. Fill in a few basic details, and voilà, you're all set to embark on your learning journey with QuizWiz.",
  },
  {
    title: "Are the quizzes free to take?",
    text: "Absolutely! All the quizzes on QuizWiz are 100% free. We firmly believe in making knowledge accessible to everyone.",
  },
  {
    title: "What types of quizzes does QuizWiz offer?",
    text: "QuizWiz offers a wide variety of quizzes across subjects like music, sports, film and TV, arts and literature, history, society and culture, science, geography, food and drink, and general knowledge. Whether you're a science enthusiast or a history buff, we have something for you.",
  },
  {
    title: "Is QuizWiz suitable for all age groups?",
    text: "Yes, QuizWiz is designed to accommodate learners of all age groups. Whether you're a student looking for educational quizzes, an adult seeking to test your knowledge, or a parent looking for fun and educational content for your kids, QuizWiz has something for everyone. Our quizzes are categorized to cater to a diverse audience, so everyone can enjoy and learn.",
  },
  {
    title: "Are there any time limits for taking quizzes on QuizWiz?",
    text: "Yes, there is a time limit for quizzes on QuizWiz. You have 30 seconds per question to answer. Don't worry, it's enough time to test your knowledge and keep the quizzes engaging. So, stay focused and enjoy learning at your own pace!",
  },
];

export default function FaqSection() {
  return (
    <GridBox>
      <h2 className="col-span-full text-[3.3rem] text-secondary sm:mb-28 mb-8 font-semibold">
        Frequently Asked Questions
      </h2>
      <FaqItemBox />
      <FaqImgBox />
    </GridBox>
  );
}

function FaqItemBox() {
  const [faqBoxIsOpen, setFaqBoxIsOpen] = useState("");
  return (
    <div className="flex flex-col gap-12 w-full">
      {faqEntries.map((question) => (
        <FaqItem
          heading={question.title}
          text={question.text}
          key={question.title}
          id={question.title}
          faqBoxIsOpen={faqBoxIsOpen}
          setFaqBoxIsOpen={setFaqBoxIsOpen}
        />
      ))}
    </div>
  );
}

function FaqItem({ heading, text, faqBoxIsOpen, id, setFaqBoxIsOpen }) {
  const handleClick = function () {
    setFaqBoxIsOpen((idFaqBox) => id !== idFaqBox && id);
  };

  return (
    <div
      className="flex flex-col gap-6 bg-white p-10 cursor-pointer shadow-md w-full"
      onClick={handleClick}
      id="faq"
    >
      <div className="flex justify-between font-bold text-tertiary">
        <p className="text-[1.5rem]  ">{heading}</p>
        <span className="text-[2rem] ">{faqBoxIsOpen === id ? `-` : "+"}</span>
      </div>

      {faqBoxIsOpen === id && (
        <p className="text-[1.5rem] leading-[1.6]  w-full ">{text}</p>
      )}
    </div>
  );
}

function FaqImgBox() {
  return (
    <div className="w-full">
      <img src="FAQs-cuate.svg" alt="faq" />
    </div>
  );
}
