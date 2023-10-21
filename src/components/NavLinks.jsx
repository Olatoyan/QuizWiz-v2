import { Link } from "react-router-dom";

export default function NavLinks({ children, href }) {
	return (
		<li className="text-[1.8rem] py-4 px-8 mx-2 hover:bg-cta-bg-color hover:text-white transition-all ease-in-out  delay-10 duration-500 hover:opacity-90 rounded my-5 cursor-pointer">
			<Link to={`${children === "Sign up" ? "/sign up" : `/${href}`}`}>
				{children}
			</Link>
		</li>
	);
}
