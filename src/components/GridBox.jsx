export default function GridBox({ children }) {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center px-10 md:px-20 lg:px-28 mb-24">
			{children}
		</section>
	);
}
