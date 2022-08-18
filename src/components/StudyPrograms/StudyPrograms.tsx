import React, {useEffect, useMemo} from 'react';
import s from '../../App.module.scss';
import {useSelector} from "react-redux";
import {ProgramsType} from "../../api/programs-api";
import {SetProgramsTC} from "../../store/programsReducer";
import {AppStateType} from "../../store/store";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {Modules} from "./Modules/Modules";

export const StudyPrograms = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(SetProgramsTC())
    }, [dispatch])

    const allPrograms = useSelector<AppStateType, ProgramsType[]>(state => state.programs)
    const programsForRender = useMemo(() => allPrograms
            .filter(p => p.specializedSubjects.length >= 10)
            .slice(0, 5)
            .map(p => {
                return <div key={p._id}>
                    <div><span>{p.title}</span></div>
                    <div>
                        <Modules
                            numberOfModules={2}
                            key={p._id}
                            programID={p._id}/>
                    </div>
                </div>
            })
        , [allPrograms])

    return (
        <div className={s.program}>
            {programsForRender}
        </div>
    );
};
