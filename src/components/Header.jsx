import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Header() {
	const [navIsOpen, setNavIsOpen] = useState(false);

	const handleToggle = function () {
		setNavIsOpen((cur) => !cur);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setNavIsOpen(true);
			} else {
				setNavIsOpen(false);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header className="flex flex-wrap items-center justify-between py-10 px-10">
			<h2 className="text-[3rem] text-primary  font-semibold">
				<Link to="/">QuizWiz</Link>
			</h2>

			<NavToggle onToggle={handleToggle} />
			<NavBar isVisible={navIsOpen} />
		</header>
	);
}

function NavToggle({ onToggle }) {
	return (
		<div role="button" className="cursor-pointer md:hidden" onClick={onToggle}>
			<FontAwesomeIcon icon={faBars} className="fa-4x" />
		</div>
	);
}

function NavBar({ isVisible }) {
	return (
		<nav className={`w-screen md:w-auto  ${!isVisible ? "hidden" : ""}`}>
			<NavList />
		</nav>
	);
}

function NavList() {
	return (
		<ul className="w-100 md:flex transition-all duration-300 ease-in-out">
			<NavLinks href="#about_us">About us</NavLinks>
			<NavLinks href="#faq">FAQs</NavLinks>
			<NavLinks href="#contact">Contact us</NavLinks>
			<NavLinks>Sign up</NavLinks>
		</ul>
	);
}
