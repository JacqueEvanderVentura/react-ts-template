import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "../../components";

interface IOurCause {
	handleSmoothScroll: Function;
}
const OurCause = ({ handleSmoothScroll }: IOurCause) => {
	return (
		<div>
			<Typography className="p-10 text-center" size="xl">
				La fundación REF surge por la iniciativa y necesidad de ayudar a pacientes adultos de Leucemia Linfocítica
				Crónica, quienes desde su diagnóstico presentan diversas dificultades tales como negación de la enfermedad,
				la poca o nula colaboración de sus familiares, su exclusión en el sistema de salud pública, como también en
				el proceso de obtención de los medicamentos en dicho sistema o en sus respectivas ARS entre otras
				situaciones que suelen surgir desde el instante que una persona se convierte en paciente de cáncer, y en
				este caso, paciente de la Leucemia Linfocitica Cronica (LLC).
			</Typography>
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" onClick={() => handleSmoothScroll(3)}>
				<FontAwesomeIcon icon={faChevronDown} className="motion-safe:animate-bounce text-7xl" />
			</div>
		</div>
	);
};

export default OurCause;
