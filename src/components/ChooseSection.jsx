//// Begin Code Explanation ////
// ## Summary
// The code snippet is a React component that renders a section with multiple boxes. Each box contains a title, text, and an image. The content of the boxes is dynamically generated based on an array of objects.

// ## Code Analysis
// ### Inputs
// - `featureSections`: An array of objects representing the data for each box. Each object has the following properties:
//   - `title`: A string representing the title of the box.
//   - `text`: A string representing the text content of the box.
//   - `img`: A string representing the image source for the box.
//   - `isChanged`: A boolean flag indicating if the box should be changed.
// ___
// ### Flow
// 1. The `ChooseSection` component renders a section element with a class name and a heading.
// 2. The `featureSections` array is mapped over using the `map` function.
// 3. For each object in the `featureSections` array, a `ChooseBox` component is rendered.
// 4. The `ChooseBox` component receives the data for each box as props.
// 5. The `ChooseBox` component renders the title, text, and image for each box.
// 6. The `isChanged` flag is used to conditionally apply a CSS class to the image container.
// ___
// ### Outputs
// The output of the code snippet is a section element with multiple boxes. Each box contains a title, text, and image. The content of the boxes is dynamically generated based on the data in the `featureSections` array. The `isChanged` flag is used to conditionally apply a CSS class to the image container.
// ___;
//// End Code Explanation ////

const featureSections = [
  {
    title: "Engaging Quizzes",
    text: "Discover the captivating world of quizzes on QuizWiz! Our platform boasts an extensive collection of quizzes that span a diverse range of topics. Whether you're a music maestro, a film and TV fanatic, an arts and literature aficionado, or a history enthusiast, QuizWiz has a treasure trove of quizzes waiting for you.",
    img: "Choose-rafiki.svg",
    isChanged: false,
  },
  {
    title: "Track Your Progress",
    text: "Our intuitive progress monitoring system not only helps you gauge your current knowledge level but also celebrates your achievements. Visualize your journey as you conquer challenging quizzes and consistently improve your scores. It's like having a personal scoreboard for your learning adventure.",
    img: "Progress overview-amico.svg",
    isChanged: true,
  },
  {
    title: "User-Friendly Interface",
    text: "Whether you're a tech-savvy guru or just starting your online learning journey, QuizWiz welcomes you with open arms. No tech wizardry is required; all you need to do is sign up, and you're on your way to exploring the fascinating world of quizzes.",
    img: "Online test-pana.svg",
    isChanged: false,
  },
];

export default function ChooseSection() {
  return (
    <section className="px-10 md:px-20 lg:px-28 mb-24 ">
      <h2 className="text-center text-secondary text-[3.3rem] font-semibold">
        Why Choose QuizWiz?
      </h2>
      <div>
        {featureSections.map((box) => (
          <ChooseBox
            heading={box.title}
            text={box.text}
            imgSrc={box.img}
            isChanged={box.isChanged}
            key={box.title}
          />
        ))}
      </div>
    </section>
  );
}

function ChooseBox({ heading, text, imgSrc, isChanged }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center mt-16">
      <div className="flex flex-col gap-12">
        <h3 className="text-[2.7rem] font-bold bg-secondary text-white p-3 transform -skew-x-12 w-fit ">
          {heading}
        </h3>
        <p className="text-[1.8rem] leading-[1.8]">{text}</p>
      </div>
      <div
        className={`w-[40rem] ${
          isChanged ? "col-start-1 col-end-2 md:row-start-1" : ""
        }`}
      >
        <img
          src={imgSrc}
          alt="choose"
          className="sm:w-fill md:w-80 lg:w-fit mx-auto"
        />
      </div>
    </div>
  );
}
