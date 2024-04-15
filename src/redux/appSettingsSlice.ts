import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface AppState {
	language: string;
	isMobile: boolean;
}

const initialState: AppState = {
	language: "en",
	isMobile: window.matchMedia("(max-width: 768px)").matches,
};

export const appSettingsSlice = createSlice({
	name: "appSettings",
	initialState,
	reducers: {
		changeLanguage: (state, action: PayloadAction<string>) => {
			state.language = action.payload;
		},
		setIsMobile: (state, action: PayloadAction<boolean>) => {
			state.isMobile = action.payload;
		},
	},
});

export const { changeLanguage, setIsMobile } = appSettingsSlice.actions;
export const selectLanguage = (state: RootState) => state.appSettings;
export const selectIsMobile = (state: RootState) => state.appSettings;
export default appSettingsSlice.reducer;
