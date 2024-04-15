import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Typography } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import classNames from "classnames";

export const ParallaxUI = () => {
	const ref = useRef<IParallax>(null);
	const [hovered, setHovered] = useState(false);

	const catGif = "https://github.com/fireship-io/skydiving-cat-parallax/blob/main/src/cat.gif?raw=true";
	const moonPic = "https://github.com/fireship-io/skydiving-cat-parallax/blob/main/src/moon.png?raw=true";
	const landPic = "https://github.com/fireship-io/skydiving-cat-parallax/blob/main/src/land.png?raw=true";

	const flyUpClasses = classNames({ "motion-safe:animate-bounce": hovered });
	return (
		<Parallax ref={ref} pages={4} style={{ backgroundColor: "#000" }}>
			<ParallaxLayer
				offset={0}
				factor={2}
				speed={1}
				style={{ backgroundImage: `url(${moonPic})`, backgroundSize: "cover" }}
			/>
			<ParallaxLayer
				offset={2}
				factor={3}
				speed={1}
				style={{
					backgroundImage: `url(${landPic})`,
					backgroundSize: "cover",
				}}></ParallaxLayer>
			<ParallaxLayer
				offset={0}
				sticky={{
					start: 0.3,
					end: 3,
				}}
				speed={0.5}
				style={{
					width: "fit-content",
					height: "fit-content",
				}}>
				<img src={catGif} />
			</ParallaxLayer>
			<ParallaxLayer
				offset={3.85}
				onClick={() => ref.current?.scrollTo(0)}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				style={{
					display: "flex",
					justifyContent: "center",
					cursor: "pointer",
				}}>
				<Typography size="4xl" className="text-white">
					Fly up again <FontAwesomeIcon icon={faArrowUp} className={flyUpClasses} flip />
				</Typography>
			</ParallaxLayer>
		</Parallax>
	);
};
