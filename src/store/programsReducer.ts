import {programsApi, ProgramsType} from "../api/programs-api";
import {AppThunk} from "./store";


const initialState: Array<ProgramsType> = []


export const programsReducer = (state: Array<ProgramsType> = initialState, action: ActionType): Array<ProgramsType> => {
    switch (action.type) {
        case 'SET-PROGRAMS':
            return action.programs.map(pr => ({...pr}))
        default:
            return state
    }
}

//action-creators
export const SetPrograms = (programs: Array<ProgramsType>) => ({type: 'SET-PROGRAMS', programs} as const)

//thunk
export const SetProgramsTC = (): AppThunk => async dispatch => {
    try {
        dispatch(SetPrograms((await programsApi.getPrograms()).data))
    } catch (err) {
        console.log(err)
    }
};

//types
export type ActionType = ReturnType<typeof SetPrograms>