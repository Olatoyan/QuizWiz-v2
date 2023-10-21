import NavLinks from "./NavLinks";

export default function Footer() {
	return (
		<footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-8 sm:py-16 sm:px-28 bg-[#003d66] text-white">
			<h2 className="text-[4rem] text-white  font-semibold">
				<button>QuizWiz</button>
			</h2>
			<FooterBox
				heading="About Us"
				text="At QuizWiz, we're dedicated to making learning enjoyable and
          accessible for everyone. Our team of tech enthusiasts is committed to
          delivering an exceptional quiz-taking experience"
			/>
			<FooterBox
				heading="About Us"
				text={
					<>
						Have questions or feedback? We’d love to hear from you. Contact our
						support team at
						<a href="mailto:support@quizwiz.com">support@quizwiz.com</a>
					</>
				}
			/>
			<FooterLinks />
		</footer>
	);
}

function FooterBox({ heading, text }) {
	return (
		<div className="flex flex-col gap-8">
			<h3 className="text-[2rem] font-semi-bold">{heading}</h3>
			<p className="text-[1.6rem] leading-[1.4]">{text}</p>
		</div>
	);
}

function FooterLinks() {
	return (
		<div>
			<h3 className="text-[2rem] font-semi-bold">Follow Us</h3>
			<ul>
				<NavLinks>Facebook</NavLinks>
				<NavLinks>Twitter</NavLinks>
				<NavLinks>Instagram</NavLinks>
			</ul>
		</div>
	);
}
