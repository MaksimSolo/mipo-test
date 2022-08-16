import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {ActionType, programsReducer} from "./programsReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const rootReducers = combineReducers({
        programs: programsReducer,
    }
)

export const store = createStore(rootReducers, applyMiddleware(thunk));


//types
type ReducersType = typeof rootReducers;
export type AppStateType = ReturnType<ReducersType>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionType>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionType>


// @ts-ignore
window.store = store;