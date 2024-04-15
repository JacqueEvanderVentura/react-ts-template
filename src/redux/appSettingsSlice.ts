import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface AppState {
    language: string;
}

const initialState: AppState = {
    language: "en"
}

export const appSettingsSlice = createSlice({
    name: 'appSettings',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            console.info("tamo aki en reduce", action.payload)
            state.language = action.payload
        },
    }
})

export const { changeLanguage } = appSettingsSlice.actions;
export const selectLanguage = (state: RootState) => state.appSettings;
export default appSettingsSlice.reducer
