import { Button, Typography } from "../../components";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
	changeIsDescriptionShown,
	selectHighlightedIntegrant,
	selectIntegrants,
	showNextIntegrant,
	showPreviousIntegrant,
} from "../../redux/integrantsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Integrants = () => {
	const dispatch = useDispatch();
	const integrants = useSelector((state: RootState) => selectIntegrants(state));
	const highlightedIntegrantId = useSelector((state: RootState) => selectHighlightedIntegrant(state));
	const highlightedIntegrantData = integrants.find((integrant) => integrant.id === highlightedIntegrantId);

	function handleShowIntegrantDescription() {
		dispatch(changeIsDescriptionShown(highlightedIntegrantData?.id ?? 0));
	}
	const containerClasses = classNames(
		"border-2 cursor-pointer w-[90vw] h-[66vh] flex justify-center items-center transition-all duration-500",
		{
			"bg-red-400": highlightedIntegrantData?.isDescriptionShowned,
		},
	);

	function handlePreviousIntegrant() {
		dispatch(showPreviousIntegrant());
	}
	function handleNextIntegrant() {
		dispatch(showNextIntegrant());
	}
	return (
		<div className="mt-20">
			<div className={containerClasses} onClick={handleShowIntegrantDescription}>
				{highlightedIntegrantData?.isDescriptionShowned ? (
					<Typography variant="card" size="2xl">
						{highlightedIntegrantData?.description}
					</Typography>
				) : (
					<img src={highlightedIntegrantData?.image} className="w-full h-full p-0" />
				)}
			</div>
			<div className="flex flex-row justify-center items-center mt-7 gap-6">
				<Button variant="prevnext" onClick={handlePreviousIntegrant}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</Button>
				<Button variant="prevnext" onClick={handleNextIntegrant}>
					<FontAwesomeIcon icon={faAngleRight} />
				</Button>
			</div>
		</div>
	);
};

export default Integrants;
