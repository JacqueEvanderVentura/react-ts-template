import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Integrant {
	id: number;
	name: string;
	description: string;
	image: string;
	isDescriptionShowned: boolean;
}
interface IntegrantState {
	integrants: Integrant[];
	highlightedIntegrant: number;
}

const integrants: Integrant[] = [
	{
		id: 0,
		name: "Jacque E. Ventura",
		description:
			"Hola, soy un Ingeniero de Sistemas egresado del Instituto Tecnológico de Santo Domingo (INTEC). Actualmente laboro para Ikea como Tech Team Lead mientras apoyo en los procesos de tesorería de la Fundación y doy servicios de Análisis, Diseño y Desarrollo de la presencia virtual de REF.",
		image: "src/assets/images/integrants/jacque.svg",
		isDescriptionShowned: false,
	},
	{
		id: 1,
		name: "Miguel de la Cruz",
		description: "Hola, soy Miguel Braho.",
		image: "src/assets/images/integrants/braho.svg",
		isDescriptionShowned: false,
	},
];

const initialState: IntegrantState = {
	integrants,
	highlightedIntegrant: 0,
};

export const integrantsSlice = createSlice({
	name: "integrants",
	initialState,
	reducers: {
		changeIsDescriptionShown: (state, action: PayloadAction<number>) => {
			state.integrants.map((integrant: Integrant) =>
				integrant.id === action.payload
					? (integrant.isDescriptionShowned = !integrant.isDescriptionShowned)
					: integrant,
			);
		},
		showPreviousIntegrant: (state) => {
			state.highlightedIntegrant === 0
				? (state.highlightedIntegrant = state.integrants.length - 1)
				: --state.highlightedIntegrant;
		},
		showNextIntegrant: (state) => {
			state.highlightedIntegrant === state.integrants.length -1
				? (state.highlightedIntegrant = 0)
				: ++state.highlightedIntegrant;
		},
	},
});

export const { changeIsDescriptionShown, showNextIntegrant, showPreviousIntegrant } = integrantsSlice.actions;
export const selectIntegrants = (state: RootState) => state.integrants.integrants;
export const selectHighlightedIntegrant = (state: RootState) => state.integrants.highlightedIntegrant;
export default integrantsSlice.reducer;
