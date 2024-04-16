import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Heading } from "../../../components";

interface IHomeBody {
	handleSmoothScroll: Function;
}

const HomeBody = ({ handleSmoothScroll }: IHomeBody) => {
	return (
		<div className="flex justify-center items-center flex-col h-full relative">
			<Heading level="h1" className="font-display font-normal text-center text-[12vw]">
				Unidos gota a gota
			</Heading>
			<div className="flex flex-col">
				<div className="flex gap-6 pt-8">
					<Button className="text-[20px] w-[10rem]" variant="outlined">
						Contáctanos
					</Button>
					<Button className="text-[20px] w-[10rem]" variant="ref">
						Dona
					</Button>
				</div>
			</div>
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" onClick={()=>handleSmoothScroll(1)}>
				<FontAwesomeIcon icon={faChevronDown} className="motion-safe:animate-bounce text-7xl" />
			</div>
		</div>
	);
};

export default HomeBody;
