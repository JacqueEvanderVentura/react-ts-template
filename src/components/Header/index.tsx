import Heading from "../Heading";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<div className="flex justify-between w-screen px-2 text-white">
			<Heading className="font-light">Fundación REF</Heading>
			<Navbar />
		</div>
	);
};

export default Header;
