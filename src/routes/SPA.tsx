import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Typography } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import classNames from "classnames";
import Header from "../components/Header";
import HomeBody from "./Home/Home/HomeBody";

export const SPA = () => {
	const ref = useRef<IParallax>(null);
	const [hovered, setHovered] = useState(false);

	const bgHome = "src/assets/images/bg/bg-landing-page.svg";
	const flyUpClasses = classNames({ "motion-safe:animate-bounce": hovered });

	function handleSmoothScroll(page: number) {
		ref.current?.scrollTo(page);
	}
	return (
		<Parallax ref={ref} pages={5} style={{ backgroundColor: "#FFF", color: "#000" }}>
			<ParallaxLayer
				offset={0}
				factor={0.1}
				speed={1}
				sticky={{
					start: 0,
					end: 5,
				}}
				style={{
					color: "#FFF",
					height: "fit-content",
				}}>
				<Header />
			</ParallaxLayer>
			<ParallaxLayer
				offset={0}
				factor={1}
				style={{
					color: "#FFF",
					backgroundImage: `url(${bgHome})`,
					backgroundPosition: "center",
					justifyContent: "center",
					alignItems: "center",
					backgroundSize: "cover",
				}}>
				<div className="bg-[#0008] absolute z-10 h-full w-full" />
				<div className="absolute z-20 inset-0 flex justify-center items-center">
					<HomeBody handleSmoothScroll={handleSmoothScroll} />
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={1} factor={1}>
				holiwiii
			</ParallaxLayer>
			<ParallaxLayer
				offset={2}
				factor={1}
				style={{
					width: "fit-content",
					height: "fit-content",
				}}>
				entonce
			</ParallaxLayer>
			<ParallaxLayer
				offset={3}
				onClick={() => ref.current?.scrollTo(0)}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				style={{
					display: "flex",
					justifyContent: "center",
					cursor: "pointer",
				}}>
				<Typography size="4xl" className="text-white">
					{/* Fly up again <FontAwesomeIcon icon={faArrowUp} className={flyUpClasses} flip /> */}
					Fly up again <FontAwesomeIcon icon={faArrowUp} className={flyUpClasses} />
				</Typography>
			</ParallaxLayer>
		</Parallax>
	);
};
