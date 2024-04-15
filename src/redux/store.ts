import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appSettingsReducer from "./appSettingsSlice";
import { enqueueSnackbar } from "notistack";

const loadState = (): any => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.error(error)
    enqueueSnackbar(error as string ?? "An error has occurred", {
			variant: "error",
			autoHideDuration: 5000,
		});
  }
};

const rootReducer = combineReducers({
  appSettings: appSettingsReducer
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(), 
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
