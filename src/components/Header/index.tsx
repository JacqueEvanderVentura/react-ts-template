import Heading from "../Heading";
import Navbar from "./Navbar";

const Header = () => {
	return <div className="flex justify-between w-screen">
		<Heading>Fundación REF</Heading>
		<Navbar/>
	</div>;
};

export default Header;
